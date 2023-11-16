import Servicio from '../Servicio/servicioComida.js'

class Controlador {
    constructor() {
        this.servicio = new Servicio()        
    }

    guardarComida = async (req, res) => {
        const comida = req.body
        console.log(comida);
        const comidaGuardada = await this.servicio.guardarComida(comida)
        res.json(comidaGuardada)
    }

    obtenerComidas = async(req,res) => {
        console.log('controller');
        // const { comidaId } = req.params
        const comidas = await this.servicio.obtenerComidas()
        res.json(comidas)
    }

    mostrarComidas = async(req,res)=>{
        const comidas = await this.servicio.mostrarComidas();
        res.json(comidas)
    }

    actualizarComida = async(req,res) => {
        const { comidaId } = req.params
        const comidaNueva = req.body 
        const comidaActualizada = await this.servicio.actualizarComida(comidaId, comidaNueva)
        res.json(comidaActualizada)
    }

    eliminarComida = async (req,res) => {
        const { comidaId } = req.params
        const comidaEliminada = await this.servicio.eliminarComida(comidaId)
        res.json(comidaEliminada)
    }
}

export default Controlador