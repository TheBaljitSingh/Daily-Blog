const jwt = require("jsonwebtoken");
const User = require("../models/userModel");


exports.isAuthenticatedUser = async(req, res, next)=>{
    const {token} = req.cookies;

    if(!token){
        return next("Please Login to access this resource", 401)
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET)

    req.user =  await User.findById(decodedData.id);
    // ye req.user kya hai
    console.log(decodedData);

    next();
}


exports.authorizeRoles= (...roles)=>{
    return(req, res, next)=>{

        if(!roles.includes(req.user.role)){
            return next(`Role: ${req.user.role} is not allowed to acces this resource`, 403);

        }
 
        next();
    }
}