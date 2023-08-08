const express = require("express");
const app = express();


// creating the server || initialisation to server
app.listen(3000, () => {
    console.log("server started at port number 3000.");
});


// =========== get request ======================
app.get("/", (request, responce) => {
    responce.send("Hello je , A hai Home Page");
})



// ===========post request =======================
const bodyParser = require("body-parser"); // =>  .used to parser requesr.body in express
app.use(bodyParser.json());// =>  specifically pars JSON data & add it to the request body object
// Routes
app.post("/api/cars", (request, responce) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    responce.send("car request submited succesfully....!");
})