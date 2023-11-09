import express from 'express'
import conexBd from './Model/Mongoose.js'
import config from './config.js'
import UserModel from './Model/FoodModel.js'
import swaggerAutogen from 'swagger-autogen';
import RouterApp from './router/router.js'


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/', new RouterApp().start())
await conexBd.conectar()


const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))

// const model = new UserModel();

// const comidas = await model.obtenerComidas()
// console.log(comidas);
