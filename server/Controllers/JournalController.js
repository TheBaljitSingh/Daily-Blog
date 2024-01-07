const mongoose = require("mongoose");

const post = require("../models/postsModel");


exports.Journal= async (req, res) =>{

    try{
        
            const filter = {};
            const allData = await post.find(filter)

            return res.json(allData);

    }
    catch (error){
        
        console.log(error.message);

    }
};

exports.userJournal = async (req, res) =>{
    try{
        const userId = "6594f3103d758a9a43ca7c81"
        const userData = await post.findById(userId)

        return res.Json(userData);

    }
    catch(error){
        console.log(error.message);

    }
}

