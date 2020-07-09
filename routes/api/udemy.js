const router = require("express").Router();
const udemyController = require("../../controllers/udemyController");

router.route("/getcourses").get(udemyController.getCourses);

module.exports = router;
