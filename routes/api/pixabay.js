const router = require("express").Router();
const pixabayController = require("../../controllers/pixabayController");

router.route("/getpixabay")
      .get(pixabayController.getPicture);

module.exports = router;