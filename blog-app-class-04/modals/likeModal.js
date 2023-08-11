// import mongoose
const mongoose = require("mongoose")



// route handaler
const likeSchema = new mongoose.Schema(
    {
        post:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "post",
        },

        user:{
             type: String,
             required: true,
        }
    }
)


// exports
module.exports = mongoose.modal("like", likeSchema);