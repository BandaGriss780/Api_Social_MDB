import {UsuariosModel} from "../models/Model.js"


async function getAllUsers() {
    const usuarios = await UsuariosModel.find()
    console.log(usuarios)
    return usuarios
}

const createNewUser = async (nuevoUsuario) => {
    const usuario = new UsuariosModel(
        nuevoUsuario
    )
    await usuario.save()
    return usuario
}

const updateUser = async (id, newUsuario) => {
    await UsuariosModel.updateOne({_id: id}, {
        $set: newUsuario
    })
    return newUsuario
}

async function deleteUser(id) {
    await UsuariosModel.deleteOne({_id: id})
}



export default {
     getAllUsers,
     createNewUser,
     updateUser,
     deleteUser
 }





