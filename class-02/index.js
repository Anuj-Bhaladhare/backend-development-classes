

const express = require("express");
const app = express();


// load config from env File
require("dotenv").config();
const PORT = process.env.PORT || 4000;



// middlewear to parser json request body
app.use(express.json());



// import routes from Todo API
const todoRoutes = require("./routes/todos");
// mount the Todo API Routes
app.use("api/v1", todoRoutes);



// start your server
app.listen( PORT, () => {
    console.log("server Started SuccessFully.....!");
})


// connection with mongoDB
const connectDB = require("./config/dataBase");
connectDB();


// defualt routes
app.get("/", (req, res) => {
    res.send("<h1>This is your home page</h1>");
})