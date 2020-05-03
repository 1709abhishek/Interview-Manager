var Student = require("../../../models/student");
var Interview = require("../../../models/interview");

module.exports.create = async function (req, res) {
    try {
        var new_student = await new Student(req.body);
        let students = await new_student.save();
        let student = await Student.find({});
        let interviews = await Interview.find({});
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

module.exports.createForm = async function (req, res) {
    let student = await Student.find({});
    let interviews = await Interview.find({});
    return res.render("create_student", {
        title: "create student",
        student: student,
        interviews: interviews
    });
};