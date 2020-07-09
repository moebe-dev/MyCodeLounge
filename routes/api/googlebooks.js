const router = require("express").Router();
const googleBooksController = require("../../controllers/googleBooksController");

router.route("/getbooks").get(googleBooksController.getBooks);

module.exports = router;
