import User from "../database/User.js"


const getAllUsers = () => {
    const allUsers =  User.getAllUsers()
    return allUsers
}

const getOneUser = (id) => {
    const oneUser = User.getOneUser(id)
    return oneUser
}

const createNewUser = (newUser) => {
    const createdUser = User.createNewUser(newUser)
    return createdUser
}

const updateUser = (id, data) => {
    const usuarioActualizado = User.updateUser(id, data)
    return usuarioActualizado
}

const deleteUser = (id) => {
    const deletedUser = User.deleteUser(id)
    return deletedUser
}


export default {
    getAllUsers,
    getOneUser,
    createNewUser,
    deleteUser,
    updateUser
}