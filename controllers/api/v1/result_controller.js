var Result = require('../../../models/result');
var Interview = require('../../../models/interview');
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