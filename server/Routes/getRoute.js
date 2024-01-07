const express = require("express");
const router = express.Router();

const {Journal, userJournal} = require("../Controllers/JournalController")

router.route("/Journal").get(Journal);
router.route("/userJournal").get(userJournal);




module.exports = router;

