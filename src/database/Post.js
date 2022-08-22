import {postModel} from "../models/Model.js"


async function getAllPosts() {
    const posteos = await postModel.find()
    console.log(posteos)
    return posteos
}

const createNewPost = async (nuevoPosteo) => {
    const posteo = new postModel(
        nuevoPosteo
    )
    await posteo.save()
    return posteo
}

const updatePost = async (id, newPosteo) => {
    await postModel.updateOne({_id: id}, {
        $set: newPosteo
    })
    return newPosteo
}

async function deletePost(id) {
    await postModel.deleteOne({_id: id})
}



export default {
     getAllPosts,
     createNewPost,
     updatePost,
     deletePost
 }