const { getAllPost, getPost, createPost, updatePost, deletePost, createComment, updateComment, deleteComment } = require("./blog.Controller");
const { signUp, logIn, logOut } = require("./user.Controller");


module.exports = {
    signUp,
    logIn,
    logOut,
    getAllPost,
    getPost,
    createPost,
    updatePost,
    deletePost,
    createComment,
    updateComment,
    deleteComment
};