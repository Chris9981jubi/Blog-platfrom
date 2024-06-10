const express = require("express");
const app = express();
const postRoutes= require("./routes/post");
const postController = require("./controllers/post");

app.use(".api/v1/post", postController)


app.listen(8080 , ()=>{
    console.log("server is up and running on port 8080")
})