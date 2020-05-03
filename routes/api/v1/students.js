const express = require("express");

const router = express.Router();
const studentController = require("../../../controllers/api/v1/students_controller");

console.log("router loaded");

router.get("/create-form", studentController.createForm);
router.post("/create", studentController.create);

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));

module.exports = router;