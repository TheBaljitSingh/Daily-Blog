const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    // here you have to write which format you want to save your data
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now(),
    }

});

module.exports = mongoose.model("Post", postSchema);
