// import modals
const Post = require("../modals/postModal");



const createPost = async(req, res) => {
    try{
        const {title, body} = req.body;
        const post = new Post({
            title,body,
        });
        const savedPost = await post.save();

        res.json({
            post:savedPost,
        });
}
catch(error) {
    return res.status(400).json({
        error: "Error while creating post",
    });
}
}

// need some more testing after completing like wala controleer
const getAllPost = async(req, res) => {
    try {
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            posts,
        })
    }
    catch(error) {
        return res.status(400).json({
            error: "Error while fetching post",
        });
    }
}





// Exporting
module.exports = createPost;
module.exports = getAllPost;