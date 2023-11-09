import ConexionMongoose from "./Mongoose.js";
import mongoose from "mongoose"

class UserModel{
    constructor(){
        this.userSchema=ConexionMongoose.getUserSchema();
    }

    guardarUsuario = async (user)=>{
      
        const User = mongoose.model('User',ConexionMongoose.userSchema)
        const toSave = new User({
            user:String(user.user),
            pass:String(user.pass),
            consumer:Boolean(user.consumer),
            contact:String(user.contact)
        })
        toSave.save()
  .then((documentoGuardado) => {
    console.log('Documento guardado:', documentoGuardado);
  })
  .catch((error) => {
    console.error('Error al guardar el documento:', error);
    throw new Error('Test error')
  });
    }

    getAllUsers = async()=>{
        const User = mongoose.model('User',ConexionMongoose.userSchema)
        const usuarios = await User.find({})
        return usuarios;
    }
}
export default UserModel