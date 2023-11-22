import express from 'express'
import conexBd from './Model/Mongoose.js'
import RouterApp from './Router/router.js'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger-output.json' assert { type: "json" }

class Server{
    constructor(port, persistencia){
        this.port = port
        this.persistencia = persistencia

        this.app = express()

    }
    async start(){
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
        this.app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
        
        this.app.use('/', new RouterApp().start())
        await conexBd.conectar()
        
        
        const PORT = this.port
        const server = this.app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
        server.on('error', error => console.log(`Error en servidor: ${error.message}`))

        return this.app
    }

    async stop(){
        if(this.server){
            this.server.close()
            await conexBd.desconectar()
            this.server.null
        }
    }

}    


export default Server