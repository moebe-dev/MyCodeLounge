const router = require("express").Router();
const w3schoolsController = require("../../controllers/w3schoolsController");


// can use .get .post here as well
router.route("/:topic")
      .get(w3schoolsController.getTopics);

module.exports = router;