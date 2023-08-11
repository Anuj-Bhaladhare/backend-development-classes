 
 const mongoose = require("mongoose")

 require("dotenv").config();

 const mongodbConnect = () => {
      mongoose.connect(process.env.DATABASE_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      })
      .then( () => {
           console.log("DB ka connection is successFully....!");
      })
      .catch( (error) => {
           console.log("DB connect nahi hua...!");
           console.log(error);
           process.exit(1);
      })
 }

 module.exports = mongodbConnect;