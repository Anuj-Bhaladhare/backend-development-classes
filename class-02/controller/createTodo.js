
// import "todo" from "modal" .
const Todo = require("../modal/todo");

// Define Route handaler
exports.createTodo = async(req, res) => {
    try{
        //  extract title and discription from request body
        const {title, discription} = req.body;
        // create new Todo object and install in DB
        const responce = await Todo.create({title, discription})
        // send a json responce with a success flag
        res.status(200).json(
            {
                sucsess: true,
                data: responce,
                massage: "Entry Created Sucessfully...!",
            }
        );
    }
    catch(error){
        console.log(error);
        console.error(error);
        res.status(500).json(
            {
                sucsess: false,
                data: "Internal Server Error...!",
                massage: error.massage,
            }
        )
    }
}

