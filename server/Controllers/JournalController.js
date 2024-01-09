const mongoose = require("mongoose");

const post = require("../models/postsModel");


exports.Journal= async (req, res) =>{

    try{
        
            // const filter = {display: public};
            const allData = await post.find({display: "public"})

            return res.json(allData);

    }
    catch (error){
        
        console.log(error.message);

    }
};

exports.userJournal = async (req, res) =>{
    try{
        const {user} = req; 
        // console.log(`user id is ${user.id}`);
        // console.log(_id);


        // const allUserData =   await post.find({author: user}).populate('author')
        const allUserData = await post.find({author: user.id})

        if(allUserData.length!=0){
            console.log(`user ka data ${allUserData}`);
            res.status(200).json({
                success: true,
                user,
                allUserData
              });
        }else{
            res.status(201).json({
                success:true,
                user
            })
        }
        


       

    }
    catch(error){
        console.log(error.message);

    }
}

