import PostServices from "../services/postServices.js"

const getAllPosts = async (req, res) => {
    const allPosts = await PostServices.getAllPosts()
    res.status(200).json({status: "ok", data: allPosts})
}

const getOnePost = async (req, res) => {
    const { id } = req.params
    const onePost = await PostServices.getOnePost(id)
    res.status(200).json({status: "ok", data: onePost})
}

const createNewPost = async (req,res) => {
    const { title, content, published, category} = req.body

        if(!title || !content || !published || !category) { {
        res.status(400).json({
            status: "error",
            err: "Completa todos los campos",
            reason: "Falta completar algun dato"
        })
    }
    const newPosteo = {
        title,
        content,
        published,
        createdAt: new Date(),
        category
    }
 //console.log(newUsuario)
    const createdPost = await PostServices.createNewPost(newPosteo)
    res.status(201).json({msg: "Usuario creado correctamente!!", data: createdPost})
}

const updatePost = async (req, res) => {
    const { id } = req.params
    const data = req.body
    //console.log(data)
    await PostServices.updatePost(id, data)

    res.status(200).json({msg: "Usuario Actualizado!!"})
}

const deletePost = async (req, res) => {
    const { id } = req.params
    await PostServices.deletePost(id)

    res.json({msg: "Usuario eliminado!"})
}


export default {
    getAllPosts,
    getOnePost,
    createNewPost,
    updatePost,
    deletePost
}
