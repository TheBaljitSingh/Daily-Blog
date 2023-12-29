const express = require("express");
const router = express.Router();

const newMessage = require("../Controllers/contactColtroller");


try {
    router.route("/contact").post(newMessage);

} catch (error) {
    console.log(error.message);
    
}
module.exports = router;