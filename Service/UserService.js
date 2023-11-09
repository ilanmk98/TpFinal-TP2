import UserModel from "../Model/userModel.js"
class UserService{

    constructor(){
        this.model= new UserModel()
    }
    getAllUsers=()=>{
        console.log('llego a servicio');
        return this.model.getAllUsers();
    }
    saveUser=(user)=>{
        return this.model.guardarUsuario(user);
    }

} export default UserService