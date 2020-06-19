const router = require("express").Router();
const youtubeController = require("../../controllers/youtubeController");

router.route("/getvideos")
    .get(youtubeController.getVideos)

module.exports = router;