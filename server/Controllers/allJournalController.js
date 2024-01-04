const mongoose = require("mongoose");

const post = require("../models/postsModel");


exports.allJournal= async (req, res) =>{

    try{
        
            const filter = {};
            const allData = await post.find(filter)

            return res.json(allData);

    }
    catch (error){
        
        console.log(error.message);

    }
};

