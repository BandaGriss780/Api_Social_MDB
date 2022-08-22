import express from 'express'
const router = express.Router()

import userController from "../../controller/usersController.js"

router
    .get("/", userController.getAllUsers)
    .get("/:id", userController.getOneUser)
    .post("/", userController.createNewUser)
    .put("/:id", userController.updateUser)
    .delete("/:id", userController.deleteUser)

export default router