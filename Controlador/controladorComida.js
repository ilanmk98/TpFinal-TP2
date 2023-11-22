import Servicio from '../Servicio/servicioComida.js'

class Controlador {
    constructor() {
        this.servicio = new Servicio()        
    }

    guardarComida = async (req, res) => {
        try {
            const comida = req.body
            console.log(comida);
            const comidaGuardada = await this.servicio.guardarComida(comida)
            res.json(comidaGuardada)
        } catch (error) {
            res.status(400).json({error:error.message})
        }
    }

    obtenerComidas = async(req,res) => {
        console.log('controller');
        const { id } = req.params
        const comidas = await this.servicio.obtenerComidas(id)
        res.json(comidas)
    }

    mostrarComidas = async(req,res)=>{
        const comidas = await this.servicio.mostrarComidas();
        res.json(comidas)
    }

    actualizarComida = async(req,res) => {
       try {
         const { id } = req.params
         const comidaNueva = req.body 
         const comidaActualizada = await this.servicio.actualizarComida(id, comidaNueva)
         res.json(comidaActualizada)
       } catch (error) {
        res.status(400).json({error:error.message})
       }
    }

    eliminarComida = async(req,res) => {
        const { id } = req.params
        const comidaEliminada = await this.servicio.eliminarComida(id)
        res.json(comidaEliminada)
    }
}

export default Controlador