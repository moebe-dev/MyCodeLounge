const router = require("express").Router();
const stackOverFlowController = require("../../controllers/stackOverFlowController");

router.route("/ask").get(stackOverFlowController.askQuestion);

module.exports = router;
