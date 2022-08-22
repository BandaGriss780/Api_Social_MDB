import express from 'express'
import morgan from 'morgan'
import mongoose from "mongoose"
import v1UsersRoute from './v1/routes/users.js'
const app = express()

const url = "mongodb://localhost/api_social"

mongoose.connect(url, {
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


//ROUTER
app.use('/api/v1/users', v1UsersRoute)
//app.use('/api/v1/posts', v1PostsRoute)

app.listen(3000, () => {
    console.log("todo bien")
})


