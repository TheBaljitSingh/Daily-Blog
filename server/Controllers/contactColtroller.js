const Contact = require("../models/contactModel");

exports.allMessage = async (req, res) =>{
    try{
        const {name, email, message} = req.body;

        const Message = await  Contact.create({
            name,
            email,
            message
        });

        res.status(201).json({
            success: true,
            Message,
        });

    }
    catch(error){
        console.log(error.message);
        res.status(500).json({
            success:false,
            error: "Server Error",
        })
    }
}