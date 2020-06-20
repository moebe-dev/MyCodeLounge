const router = require("express").Router();
const youtubeRoutes = require("./youtube");
const pixabayRoutes = require("./pixabay");
const googlebooksRoutes = require("./googlebooks");
const udemyRoutes = require("./udemy");
const stackoverflowRoutes = require("./stackoverflow");
const w3schoolsRoutes = require("./w3schools");


// make all api routes use /api/books/
router.use("/youtube", youtubeRoutes);
router.use("/pixabay", pixabayRoutes);
router.use("/googlebooks", googlebooksRoutes);
router.use("/udemy", udemyRoutes);
router.use("/stackoverflow", stackoverflowRoutes);
router.use("/w3schools", w3schoolsRoutes);

module.exports = router;