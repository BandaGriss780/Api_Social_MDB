import express from 'express'
import morgan from 'morgan'
import mongoose from "mongoose"
import v1UsersRoute from './v1/routes/users.js'
import v1PostsRoute from './v1/routes/post.js'
import dotenv from "dotenv"
const app = express()

dotenv.config()
//const url = "mongodb://localhost/api_social"

mongoose.connect(process.env.MONGOID, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Conectado a MongoDB"))
.catch(err => console.log(err))

//Middleware
app.use(express.json())
app.use(morgan('dev'))

//Variables 
//const v1UsersRoute = require('./v1/routes/users')
//const v1PostsRoute = require('./v1/routes/post')
const PORT = process.env.PORT || 3000

//ROUTER
app.use('/api/v1/users', v1UsersRoute)
app.use('/api/v1/posts', v1PostsRoute)

app.listen(PORT, () => {
    console.log("todo bien")
})

//process.env.MONGOID
