const router = require("express").Router();
const googleNewsController = require("../../controllers/googleNewsController");

// can use .get .post here as well
router.route("/getnews")
      .get(googleNewsController.getNews);

module.exports = router;