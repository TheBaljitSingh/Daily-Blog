const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./db/conn");

const port = process.env.PORT || 3000;                                              

//config
dotenv.config({path: "../Server/config/config.env"});
//db
connectDB();



const server = app.listen(process.env.port, (err)=>{
    if(err) console.log("error hai => "+ err)
    console.log(`Server is working on http://localhost:${process.env.port}`);
})

process.on("unhandledRejection",(err)=>{
    console.log(`Err: ${err.message}`);
    console.log(`Shutting down the serverdue to Unhandled Promise Rejection`);

    server.close(()=>{
        process.exit(1);
    })

})
