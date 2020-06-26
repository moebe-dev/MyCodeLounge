const router = require("express").Router();
const userController = require("../../controllers/userController");

// can use .get .post here as well
router.route("/saveorgetitem")
      .post(userController.saveItem)
      .get(userController.getItem);

router.route("/getallitems")
      .get(userController.getAllItems);

module.exports = router;