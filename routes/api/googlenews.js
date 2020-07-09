const router = require("express").Router();
const googleNewsController = require("../../controllers/googleNewsController");

router.route("/getnews").get(googleNewsController.getNews);

module.exports = router;
