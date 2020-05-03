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
        let stu = await Student.find({ name: req.body.student });
        let inter = await Interview.find({ company: req.query.company });
        let interviews = await Interview.find({});
        let students = await Student.find({});
        console.log(stu);
        if (stu) {
            var new_result = await new Result({
                company: inter.id,
                student: stu.id,
                result: "On Hold"
            });
            let result = await new_result.save();
            return res.render("create_student", {
                title: "create student",
                student: students,
                interviews: interviews
            })
        }
    } catch (err) {
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}