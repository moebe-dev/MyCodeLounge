const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// Set all api routes to start with /api
router.use("/api", apiRoutes);

// hit index page if no api routes called
router.use(function(req, res) {
    console.log("landing");
    res.sendFile(path.join(__dirname, "../build/index.html"));
});

module.exports = router;