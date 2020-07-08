const router = require("express").Router();
const youtubeRoutes = require("./youtube");
const pixabayRoutes = require("./pixabay");
const googlebooksRoutes = require("./googlebooks");
const udemyRoutes = require("./udemy");
const stackoverflowRoutes = require("./stackoverflow");
const w3schoolsRoutes = require("./w3schools");
const userRoutes = require("./user");
const googleNewsRoutes = require("./googlenews");


// make all api routes use /api/books/
router.use("/youtube", youtubeRoutes);
router.use("/pixabay", pixabayRoutes);
router.use("/googlebooks", googlebooksRoutes);
router.use("/udemy", udemyRoutes);
router.use("/stackoverflow", stackoverflowRoutes);
router.use("/w3schools", w3schoolsRoutes);
router.use("/user", userRoutes);
router.use("/googlenews", googleNewsRoutes);

module.exports = router;