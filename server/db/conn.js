const mongoose = require("mongoose");

const connectDB = ()=>{
    mongoose.connect(process.env.DB_URL, {useNewUrlParser: true})
    .then((data)=>{
        console.log(`DB Connections Successfull:  ${data.connection.host}`)
    })
}

module.exports = connectDB;