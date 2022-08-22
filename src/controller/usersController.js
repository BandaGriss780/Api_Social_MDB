import userServices from "../services/userServices.js"

const getAllUsers = async (req, res) => {
    const allUsers = await userServices.getAllUsers()
    res.status(200).json({status: "ok", data: allUsers})
}

const getOneUser = async (req, res) => {
    const { id } = req.params
    const oneUser = await userServices.getOneUser(Number(id))
    res.status(200).json({status: "ok", data: oneUser})
}

const createNewUser = async (req,res) => {
    const { name, age, band} = req.body

    if(!name || !age || !band) {
        res.status(400).json({status: "error",
                            err: "Completa todos los campos",
                            reason: "Falta completar algun dato"
        })
    }
    const newUsuario = {
        name,
        age,
        band
    }
 console.log(newUsuario)
    const createdUser = await userServices.createNewUser(newUsuario)
    res.status(201).json({msg: "Usuario creado correctamente!!", data: createdUser})
}

const updateUser = async (req, res) => {
    const { id } = req.params
    const data = req.body
    console.log(data)
    await userServices.updateUser(Number(id), data)

    res.status(200).json({msg: "Usuario Actualizado!!"})
}

const deleteUser = async (req, res) => {
    const { id } = req.params
    await userServices.deleteUser(Number(id))

    res.json({msg: "Usuario eliminado!"})
}


export default {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUser,
    deleteUser
}
