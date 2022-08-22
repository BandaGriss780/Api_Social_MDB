import express from 'express'
const router = express.Router()

import postController from "../../controller/postController.js"

router
    .get("/", postController.getAllPosts)
    .get("/:id", postController.getOnePost)
    .post("/", postController.createNewPost)
    .put("/:id", postController.updatePost)
    .delete("/:id", postController.deletePost)

export default router