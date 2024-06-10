const express = require("express");
const postController =require ("../controllers/post");

const router = express.Router();

router.get("/post/api",postController.listsPosts);
router.post("/post/api/create", postController.createPost);
router.get("/post/api/:id",postController.getPostById);
router.put("post/edit/:id",postController.editPost);
router.delete("/post/delete/:id", postController.deletePost);

module.exports=router;