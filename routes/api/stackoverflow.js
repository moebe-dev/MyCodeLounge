const router = require("express").Router();
const stackOverFlowController = require("../../controllers/stackOverFlowController");

// can use .get .post here as well
router.route("/ask")
      .get(stackOverFlowController.askQuestion);

module.exports = router;