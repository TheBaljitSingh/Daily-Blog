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
        const {user} = req; 
        // console.log(_id);


        const allUserData =   await post.find({author: user}).populate('author')


        return res.json(allUserData);

    }
    catch(error){
        console.log(error.message);

    }
}

