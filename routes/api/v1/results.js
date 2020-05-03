const express = require("express");

const router = express.Router();
const resultController = require("../../../controllers/api/v1/result_controller");

console.log("router loaded");

router.get("/show", resultController.show);

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));

module.exports = router;