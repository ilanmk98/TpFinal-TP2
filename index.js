import express from 'express'
import conexBd from './Model/Mongoose.js'
import config from './config.js'
import UserModel from './Model/FoodModel.js'
import RouterApp from './Router/router.js'

const app = express()
app.use(express.json)
app.use(express.urlencoded({extended: true}))

await conexBd.conectar()

app.use('/', new RouterApp().start())

const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))

const model = new UserModel();

const comidas = await model.obtenerComidas()
console.log(comidas);
