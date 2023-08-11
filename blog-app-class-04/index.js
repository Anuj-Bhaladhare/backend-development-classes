

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

const blog = require("./routes/blog")
//mount
app.use("/api/v1", blog);

const connectWithDb = require("./config/dataBase");
connectWithDb();

//start the server
app.listen(PORT, () => {
    console.log(`App is started at Port no ${PORT}`);
})

app.get("/", (req,res) => {
    res.send(`<h1>This is my homePage baby</h1>`)
})



// // ======================================================== Chat GPT ============================================================
// // Import express
// const express = require('express');
// const app = express();

// // Load environment variables
// require("dotenv").config();

// // Set the port number
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());

// // Import and mount the blog router
// const blog = require("./router/blog");
// app.use("/api/v1", blog);

// // Database connection with MongoDB
// const connectWithDB = require("./config/dataBase");
// connectWithDB();

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// // Route for the home page
// app.get("/", (req, res) => {
//     res.send("<h1>This is home Page Baby</h1>");
// });

