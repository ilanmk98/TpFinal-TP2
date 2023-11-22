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

    actualizarUsuario = async (id, usuarioNuevo) => {
      const res = validar(user)
      if(res.result){
        const usuarioActualizado = await this.model.actualizarUsuario(id, usuarioNuevo)
        return usuarioActualizado
      }
      else
      {
        console.log(res.error)
          throw res.error
      }
      
     }


    eliminarUsuario = async usuarioId => {
      const usuarioEliminado = await this.model.eliminarUsuario(usuarioId)
      return usuarioEliminado
     }

     puedeLogearse = async (name, pass) => {
      const usuarioBuscado = await this.model.puedeLogearse(name,pass)
        if (usuarioBuscado) {
            console.log('Usuario autenticado con éxito');
            return true
        } else {
            console.log('Nombre de usuario o contraseña incorrectos');
            return false
        }
     }

    checkTypes=(user)=>{
        if (
            typeof user === 'object' &&
            user.hasOwnProperty('user') &&
            user.hasOwnProperty('pass') &&
            user.hasOwnProperty('consumer') &&
            user.hasOwnProperty('contact')
          ) {
            
            if (
              typeof user.user === 'string' &&
              typeof user.pass === 'string' &&
              typeof user.consumer === 'boolean' &&
              typeof user.contact === 'string'
            ) {
              
              console.log('El objeto de usuario es válido.');
            } else {
              throw new Error('El objeto de usuario tiene tipos incorrectos.');
            }
          } else {
            throw new Error('El objeto de usuario no tiene todas las propiedades necesarias.');
          }
    }

} export default UserService