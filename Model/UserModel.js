import ConexionMongoose from "./Mongoose.js";
import mongoose from "mongoose"

class UserModel{
    constructor(){
        this.userSchema=ConexionMongoose.userSchema;
    }



    guardarUsuario = async (user)=>{
      
        const User = mongoose.model('User',ConexionMongoose.userSchema)
        const toSave = new User({
            user:user.user,
            pass:user.pass,
            consumer:user.consumer,
            contact:user.contact
        })
        toSave.save()
  .then((documentoGuardado) => {
    console.log('Documento guardado:', documentoGuardado);
  })
  .catch((error) => {
    console.error('Error al guardar el documento:', error);
  });
    }

    getAllUsers = async()=>{
        const User = mongoose.model('User',ConexionMongoose.userSchema)
        const usuarios = await User.find({})
        console.log(usuarios);
    }
}
export default UserModel