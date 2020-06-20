const router = require("express").Router();
const youtubeController = require("../../controllers/youtubeController");

// can use .get .post here as well
router.route("/getvideos")
      .get(youtubeController.getVideos);

module.exports = router;