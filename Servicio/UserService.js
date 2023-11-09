import UserModel from "../Model/UserModel.js"
class UserService{

    constructor(){
        this.model= new UserModel()
    }
    getAllUsers=()=>{
        console.log('llego a servicio');
        return this.model.getAllUsers();
    }
    saveUser=async(user)=>{
        this.checkTypes(user);
        return await this.model.guardarUsuario(user);
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