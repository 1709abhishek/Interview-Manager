var Interview = require("../../../models/interview");
var Student = require("../../../models/student");

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