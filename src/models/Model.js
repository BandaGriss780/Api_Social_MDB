import mongoose from "mongoose"
import {usuarioSchema, postSchema, categorySchema} from "../schemas/schema.js"

export const UsuariosModel = mongoose.model("usuarios", usuarioSchema)
export const postModel = mongoose.model("posteos", postSchema)
export const categoryModel = mongoose.model("categorias", categorySchema)


