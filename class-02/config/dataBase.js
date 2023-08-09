const mongoose = require("mongoose");

require("dotenv").config();


const mongoConnect = () => {
    mongoose.connect(process.env.LOCAL_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( () => {
        console.log("Bhayya DB ka connection succesfull Ho gaya...!");
    })
    .catch( (error) => {
        console.log(`error hai ${error}`);
        console.error(error.massage);
        process.exit(1);
    })
}

module.exports = mongoConnect;
