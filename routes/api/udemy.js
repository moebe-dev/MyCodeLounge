const router = require("express").Router();
const udemyController = require("../../controllers/udemyController");

// can use .get .post here as well
router.route("/getcourses")
      .get(udemyController.getCourses);

module.exports = router;