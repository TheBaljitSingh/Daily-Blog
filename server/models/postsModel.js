const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
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
    },
    user:{
        id:{
            type: mongoose.Schema.Types.ObjectId,
            require: true
        }
    }

});

module.exports = mongoose.model("Posts", postsSchema);
