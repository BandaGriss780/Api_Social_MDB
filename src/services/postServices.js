import Post from "../database/Post.js"


const getAllPosts = () => {
    const allPosts =  Post.getAllPosts()
    return allPosts
}

const getOnePost = (id) => {
    const onePost = Post.getOnePost(id)
    return onePost
}

const createNewPost = (newPost) => {
    const createdPost = Post.createNewPost(newPost)
    return createdPost
}

const updatePost = (id, data) => {
    const usuarioActualizado = Post.updatePost(id, data)
    return usuarioActualizado
}

const deletePost = (id) => {
    const deletedPost = Post.deletePost(id)
    return deletedPost
}


export default {
    getAllPosts,
    getOnePost,
    createNewPost,
    deletePost,
    updatePost
}