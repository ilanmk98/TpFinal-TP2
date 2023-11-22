import UserService from '../Servicio/UserService.js'

class Controlador {
    constructor() {
        this.servicio = new UserService();
    }


    login = async (req,res) => {
        const name = req.body.name;
        const pass = req.body.pass;
        console.log(name, pass)
        let usuarioEncontrado = await this.servicio.puedeLogearse(name, pass)
        res.json(usuarioEncontrado)
    }
    guardarUsuario = async(req,res)=>{
        const usuario = req.body;
        try {
            const usuarioGuardado = await this.servicio.saveUser(usuario);
        res.status(201);
        res.json(usuarioGuardado)
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
        
    }
    obtenerUsuarios = async (req,res)=>{
        const usuarios = await this.servicio.getAllUsers();
        res.json(usuarios);
    }
    agregarComidaUsuario = async (req,res)=>{
        const idUsuario = req.body.idUsuario;
        const idComida = req.body.idComida;
        try{
            await this.servicio.agregarComidaUsuario(idUsuario,idComida)
            res.status(200).json({ mensaje: 'Comida agregada con éxito al usuario.' });
        }
        catch (error){
            res.status(400).json({ error: error.message });
        }
    }

    obtenerComidaUsuario = async (req,res)=>{
        const idUsuario = req.body.id;
        try{
            const comidas = await this.servicio.obtenerComidasUsuario(idUsuario)
            res.status(200).json({mensaje:comidas})
        }
        catch (error)
        {
            res.status(400).json({error:error.message})
        }
    }

    actualizarUsuario = async(req,res) => {
        try {
            const { id } = req.params
            const comidaNueva = req.body 
            const comidaActualizada = await this.servicio.actualizarUsuario(id, comidaNueva)
            res.json(comidaActualizada)
        } catch (error) {
            res.status(400).json({error:error.message})
        }
    }

    eliminarUsuario = async(req,res) => {
        const { id } = req.params
        const UsuarioEliminado = await this.servicio.eliminarUsuario(id)
        res.json(UsuarioEliminado)
    }




} export default Controlador