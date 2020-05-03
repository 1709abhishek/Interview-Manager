var Interview = require("../../../models/interview");
var Student = require("../../../models/student");
var Result = require("../../../models/result");

module.exports.create = async function (req, res) {
    try {
        var new_interview = await new Interview(req.body);
        let interview = await new_interview.save();
        let interviews = await Interview.find({});
        let student = await Student.find({});
        return res.render("create_student", {
            title: "create student",
            student: student,
            interviews: interviews
        })
    } catch (err) {
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}

module.exports.allocate = async function (req, res) {
    try {
        console.log(req.body.student);
        let stu = await Student.findOne({ name: req.body.student });
        let inter = await Interview.findOne({ company: req.query.company });
        let interviews = await Interview.find({});
        let students = await Student.find({});
        console.log(inter);
        if (stu) {
            // var new_result = await new Result({
            //     company: inter.id,
            //     result: "On Hold"
            // });
            // let new_interview = new Interview();
            // new_interview.company = inter.company;
            // new_interview.date = inter.date;
            // console.log("######", new_interview.student);
            await inter.student.push(stu);
            await inter.save();
            // await inter.remove();
            // await new_interview.save();
            return res.redirect('/students/create-form');
        }
    } catch (err) {
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}