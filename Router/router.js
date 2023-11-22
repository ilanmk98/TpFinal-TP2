import express from 'express';
import ControladorComida from '../Controlador/controladorComida.js';
import ControladorUsuario from '../Controlador/controladorUsuario.js';



class Router {
  constructor() {
    this.router = express.Router();
    this.controladorComida = new ControladorComida();
    this.controladorUsuario = new ControladorUsuario();
    console.log('Arranca router');
  }

  start() {
    
    this.router.get('/obtenerComidas', this.controladorComida.obtenerComidas);
    this.router.post('/guardarComida', this.controladorComida.guardarComida);
    this.router.get('/mostrarComidas',this.controladorComida.mostrarComidas)
    this.router.put('/editarComida/:id', this.controladorComida.actualizarComida);
    this.router.delete('/eliminarComida/:id', this.controladorComida.eliminarComida);

    this.router.post('/login', this.controladorUsuario.login); 
    this.router.get('/obtenerUsuarios',this.controladorUsuario.obtenerUsuarios);
    this.router.post('/obtenerComidaUsuario',this.controladorUsuario.obtenerComidaUsuario);
    this.router.post('/guardarUsuario',this.controladorUsuario.guardarUsuario);
    this.router.post('/agregarComidaUsuario',this.controladorUsuario.agregarComidaUsuario)
    this.router.put('/editarUsuario/:id', this.controladorUsuario.actualizarUsuario);
    this.router.delete('/eliminarUsuario/:id', this.controladorUsuario.eliminarUsuario);

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
