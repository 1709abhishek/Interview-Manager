var request = require('request');
module.exports.home = function (req, res) {
  return res.render("home", {
    title: "Home",
  });
};
// Change this to your postings site shortname.
var SITE = 'lever';

var BASE = 'https://jobs.github.com/positions.json?description=react&page=1';
// module.exports.actionName = function(req, res){}
// At the root page, we'll display all postings.
module.exports.allJobs = function (req, res, next) {
  // Get postings from REST api.
  request({ url: BASE, json: true }, function (err, r, postings) {
    if (err) {
      next(err);
      return;
    }

    // You should use a templating engine to render the postings list.
    var page = "<!DOCTYPE html>\n";
    page += "<h1>Come work at my rad company!</h1>\n"

    for (var i = 0; i < postings.length; i++) {
      var posting = postings[i];

      page += "<div>";
      page += "<a href='" + posting.id + "'>" + posting.title + "</a>";
      page += "</div>\n";
    }
    res.send(page);
  });
};