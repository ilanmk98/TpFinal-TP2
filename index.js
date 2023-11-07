import express from 'express'
import conexBd from './Model/Mongoose.js'
import config from './config.js'
import UserModel from './Model/UserModel.js'

const app = express()
app.use(express.json)
app.use(express.urlencoded({extended: true}))

await conexBd.conectar()

const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))

const model = new UserModel();


await model.getAllUsers()