var Result = require('../../../models/result');
var Interview = require('../../../models/interview');
module.exports.show = async function (req, res) {
    let inter = await Interview.find({ company: req.query.name });
    let results = await Result.find({ company: inter.id });
    // console.log(req.query.company);
    // console.log(results);
    if (results) {
        return res.render('results_page', {
            title: "results",
            results: results
        });
    } else {
        console.log("********error in getting results");
    }
}