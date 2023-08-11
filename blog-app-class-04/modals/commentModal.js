// import mongoose
const mongoose = require("mongoose");


// route handelar
const commentSchema = new mongoose.Schema(
    {
        post:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "post",
        },
        user:{
            type: String,
            required: true,
        },
        body:{
            type: String,
            required: true,
        }
    }
)


// export
module.exports = mongoose.model("Comment" ,commentSchema);