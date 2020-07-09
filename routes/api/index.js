const router = require("express").Router();
const youtubeRoutes = require("./youtube");
const googlebooksRoutes = require("./googlebooks");
const udemyRoutes = require("./udemy");
const stackoverflowRoutes = require("./stackoverflow");
const userRoutes = require("./user");
const googleNewsRoutes = require("./googlenews");

router.use("/youtube", youtubeRoutes);
router.use("/googlebooks", googlebooksRoutes);
router.use("/udemy", udemyRoutes);
router.use("/stackoverflow", stackoverflowRoutes);
router.use("/user", userRoutes);
router.use("/googlenews", googleNewsRoutes);

module.exports = router;
