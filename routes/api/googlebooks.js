const router = require("express").Router();
const googleBooksController = require("../../controllers/googleBooksController");

// can use .get .post here as well
router.route("/getbooks")
      .get(googleBooksController.getBooks);

router.route("/savebook")
      .post(googleBooksController.saveBookToUsers);

module.exports = router;