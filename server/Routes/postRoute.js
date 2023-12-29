const express = require("express");
const router = express.Router();

const newPost = require("../Controllers/postController");

router.route("/compose").post(newPost);

module.exports = router;