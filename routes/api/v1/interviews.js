const express = require("express");

const router = express.Router();
const interviewController = require("../../../controllers/api/v1/interview_controller");

console.log("router loaded");

router.post("/create-interview", interviewController.create);

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));

module.exports = router;