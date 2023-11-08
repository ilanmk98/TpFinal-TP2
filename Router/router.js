import express from 'express'
import Controlador from '../Controlador/controlador.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    start() {
        this.router.get('/obtenerComidas', this.controlador.obtenerComidas)
        this.router.post('/guardarComida', this.controlador.guardarComida)
        this.router.put('/:id?',this.controlador.actualizarComida)
        this.router.delete('/:id?', this.controlador.eliminarComida)
    
        return this.router
    }
}

export default Router