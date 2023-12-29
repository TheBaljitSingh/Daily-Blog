const express = require("express");
const router = express.Router();

const allJournal = require("../Controllers/allJournalController");

router.route("/allJournal").get(allJournal);

module.exports = router;

