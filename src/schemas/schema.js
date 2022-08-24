import mongoose from "mongoose"

export const usuarioSchema = mongoose.Schema({
    name: String,
    age: Number,
    band: String
}, {versionKey: false})

export const postSchema = mongoose.Schema({
    title: String,
    content: String,
    createdAt: String,
    published: Boolean,
    category: String
}, {versionKey: false})

export const categorySchema = mongoose.Schema({
    name: String
}, {versionKey: false})
