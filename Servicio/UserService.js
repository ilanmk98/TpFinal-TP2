import UserModel from "../Model/UserModel.js"
import FoodService from "./servicioComida.js"
import { validar } from "./validaciones/user.js"

class UserService{

    constructor(){
        this.model= new UserModel()
        this.foodService = new FoodService()
    }
    getAllUsers=()=>{
        console.log('llego a servicio');
        return this.model.getAllUsers();
    }
    saveUser=async(user)=>{
        const res = validar(user)
        if(res.result){
          const savedUser = await this.model.guardarUsuario(user);
          return savedUser
        }
        else{
          console.log(res.error)
          throw res.error
        }
        
    }
    agregarComidaUsuario = async (idUsuario,idComida)=>{
      const usuario = await this.findUserById(idUsuario)
      const comida = await this.foodService.findFoodById(idComida)
      console.log(comida);
      usuario.comidas.push(comida._id)
      await this.model.agregarComidaUsuario(usuario);
     
    }

    findUserById = async (idUsuario)=>{
        const usuario = await this.model.findUserById(idUsuario)
        if (!usuario) {
          console.log("Error usuario");
          throw new Error('Usuario no encontrado');
        }
        return usuario;
      
    }

    obtenerComidasUsuario = async (idUsuario)=>{
      const usuario = await this.findUserById(idUsuario);
      const comidas = await this.model.obtenerComidasUsuario(usuario)
      return comidas;
     
    }

    actualizarUsuario = async (id, comidaNueva) => {
      const comidaActualizada = await this.model.actualizarUsuario(id, comidaNueva)
      return comidaActualizada
     }


    eliminarUsuario = async usuarioId => {
      const usuarioEliminado = await this.model.eliminarUsuario(usuarioId)
      return usuarioEliminado
     }

    

} export default UserService