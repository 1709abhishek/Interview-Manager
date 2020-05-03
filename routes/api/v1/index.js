const express = require("express");

const router = express.Router();
const homeController = require("../../../controllers/api/v1/home_controller");

console.log("router loaded");

router.get("/", homeController.home);
router.use("/users", require("./users"));
router.use("/students", require("./students"));
router.use("/interviews", require("./interviews"));

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));

module.exports = router;
