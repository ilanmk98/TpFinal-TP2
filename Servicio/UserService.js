import UserModel from "../Model/UserModel.js"
import FoodService from "./servicioComida.js"
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
        //this.checkTypes(user);
        return await this.model.guardarUsuario(user);
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