const router = require("express").Router();
const userController = require("../../controllers/userController");

router
      .route("/saveorgetitem")
      .post(userController.saveItem)
      .get(userController.getItem);

router.route("/getallitems").get(userController.getAllItems);

router.route("/removeitem").post(userController.removeItem);

module.exports = router;
