import express from 'express';
import Controlador from '../Controlador/controlador.js';

class Router {
  constructor() {
    this.router = express.Router();
    this.controlador = new Controlador();
    console.log('Arranca router');
  }

  start() {
   
    this.router.get('/obtenerComidas', this.controlador.obtenerComidas);
    this.router.post('/guardarComida', this.controlador.guardarComida);
    this.router.put('/:id?', this.controlador.actualizarComida);
    this.router.delete('/:id?', this.controlador.eliminarComida);

    this.router.use((req, res, next) => {
      const error = new Error('Ruta no encontrada');
      error.status = 404;
      next(error);
    });

    
    this.router.use((err, req, res, next) => {
      res.status(err.status || 500);
      res.json({
        error: {
          message: err.message,
        },
      });
    });

    return this.router;
  }
}

export default Router;
