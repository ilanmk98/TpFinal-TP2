import UserService from '../Servicio/UserService.js'

class Controlador {
    constructor() {
        this.servicio = new UserService();
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


} export default Controlador