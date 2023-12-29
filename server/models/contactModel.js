const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    // here you have to write which format you want to save your data
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    }
    

});

module.exports = mongoose.model("Contact", contactSchema);
