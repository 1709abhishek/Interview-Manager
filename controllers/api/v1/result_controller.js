var Result = require('../../../models/result');
var Interview = require('../../../models/interview');
var Student = require("../../../models/student");
const path = require('path');

const createCsvWriter = require('csv-writer').createObjectCsvWriter;



const csvWriter = createCsvWriter({
    path: './multer/data.csv',
    header: [
        { id: 'id', title: 'STUDENT_ID' },
        { id: 'name', title: 'NAME' },
        { id: 'college', title: 'College' },
        { id: 'status', title: 'STUDENT_STATUS' },
        { id: 'DSA', title: 'DSA_SCORE' },
        { id: 'WEBD', title: 'WebD_SCORE' },
        { id: 'react', title: 'REACT_SCORE' },
        { id: 'date', title: 'INTERVIEW_DATE' },
        { id: 'company', title: 'COMPANY_NAME' },
        { id: 'result', title: 'RESULT' }
    ]
});

module.exports.show = async function (req, res) {
    let interviews = await Interview.findOne({ company: req.query.company }).populate({
        path: "student",
        model: "Student"
    });
    console.log(interviews);
    // console.log(req.query.company);
    // console.log(results);
    if (interviews) {
        return res.render('results_page', {
            title: "results",
            interviews: interviews
        });
    } else {
        console.log("********error in getting results");
    }
}

module.exports.createCsv = async function (req, res) {
    try {
        let interviews = await Interview.find({});
        // console.log(interviews);
        for (var i = 0; i < interviews.length; i++) {
            for (var j = 0; j < interviews[i].student.length; j++) {
                // var objectId = new ObjectID(interviews[i].student[j]);
                // console.log(interviews[i]);
                var stu = await Student.findOne({ _id: interviews[i].student[j] });
                console.log(interviews[i].id);
                var resu = await Result.findOne({ company: interviews[i].id, student: interviews[i].student[j] });
                console.log(resu);
                const records = [
                    { id: stu._id, name: stu.name, college: stu.college, status: stu.status, DSA: stu.DSA, WEBD: stu.WEBD, react: stu.react, date: interviews[i].date, company: interviews[i].company, result: resu }
                ]
                csvWriter
                    .writeRecords(records)
                    .then(() => console.log('The CSV file was written successfully'));
            }
        }
        var fileLocation = path.join('./multer', 'data.csv');
        res.download(fileLocation, 'data.csv');
    } catch (err) {
        console.log("error in creating csv", err);
    }
}

module.exports.update = async function (req, res) {
    try {
        var resu = new Result();
        resu.company = req.query.company;
        resu.student = req.query.name;
        resu.result = req.body.category;
        resu.save();
        res.redirect('back');
    } catch (err) {
        console.log("error in creating csv", err);
    }
}