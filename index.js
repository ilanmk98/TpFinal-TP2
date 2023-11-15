import express from 'express'
import conexBd from './Model/Mongoose.js'
import config from './config.js'
import RouterApp from './router/router.js'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger-output.json' assert { type: "json" }


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use('/', new RouterApp().start())
await conexBd.conectar()


const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))

