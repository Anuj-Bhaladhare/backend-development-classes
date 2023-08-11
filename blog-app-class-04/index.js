// // import expressss
// const express = require('express');
// const app = express();


// require("dotenv").config();
// const PORT = process.env.DATABASE_URL || 3000;


// // middlewear
// app.use(express.json());


// const blog = require("./router/blog");
// // mount
// app.use("/api/v1", blog);



// // Data base connection -> with mongoDB
// const connectWithDB = require("./config/dataBase");
// connectWithDB();


// // start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${port}`);
//   }); 


// app.get("/", (req, res) => {
//     res.send("<h1>This is home Page Baby</h1>");
// })



// ======================================================== Chat GPT ============================================================
// Import express
const express = require('express');
const app = express();

// Load environment variables
require("dotenv").config();

// Set the port number
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Import and mount the blog router
const blog = require("./router/blog");
app.use("/api/v1", blog);

// Database connection with MongoDB
const connectWithDB = require("./config/dataBase");
connectWithDB();

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Route for the home page
app.get("/", (req, res) => {
    res.send("<h1>This is home Page Baby</h1>");
});

