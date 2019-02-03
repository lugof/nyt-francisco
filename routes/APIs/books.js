const router = require("express").Router();
const booksControler = require ("../../controllers/bookController");

router.route("/")
    .get(booksControler.getSavedBooks)
    .post(booksControler.saveBook);

router.route("/:id")
    .delete(booksControler.deleteBook);

module.exports = router; 