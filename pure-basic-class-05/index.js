
const express = require("express");
const app = express();
const PORT = 3000;


app.listen(PORT, (req, res) => {
    console.log(`app started at port number ${PORT}`);
})

app.get("/", (req, res) => {
    res.send("<h1>this is heading PAge</h1>")
})

app.post("/about", (req, res) => {
    res.send("this is about page mamu");
})