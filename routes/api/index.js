const router = require("express").Router();
const youtubeRoutes = require("./youtube");

// make all api routes use /api/books/
router.use("/youtube", youtubeRoutes);

module.exports = router;