const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(cookieParser());

//Route import kiya
const post = require("./Routes/postRoute");
const allJournal = require("./Routes/getRoute");
const sendMail = require("./Routes/sendMailRoute");
// const toContact = require("./Routes/postContact")
const userRoute = require("./Routes/userRoute");

app.use("/api/", post);
app.use("/api/", allJournal);
app.use('/api/', sendMail);

app.use("/api/", userRoute);



app.get("/",(req,res)=>{
    console.log("ye sahi chal raha hai");
})


module.exports = app;