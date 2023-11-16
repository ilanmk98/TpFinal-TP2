import ConexionMongoose from "./Mongoose.js";
import mongoose, { mongo } from "mongoose"

class UserModel{
    constructor(){
        this.userSchema=ConexionMongoose.getUserSchema();
        this.foodSchema = ConexionMongoose.getFoodSchema();
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
  });
    }

    getAllUsers = async()=>{
        const User = mongoose.model('User',ConexionMongoose.userSchema)
        const usuarios = await User.find({})
        return usuarios;
    }

    findUserById = async (idUsuario)=>{
      const User = mongoose.model('User',ConexionMongoose.userSchema)
      const usuario = await User.findById(idUsuario);
      return usuario;
     
    }

    agregarUsuarioUsuario = async (usuario)=>{
        await usuario.save();
        console.log('Comida agregada con éxito al usuario');
    }

    obtenerComidasUsuario = async (usuario)=>{
      const Comida = mongoose.model('Food',this.foodSchema)
      const usuarioTraido = await usuario.populate('comidas');
      return usuarioTraido.comidas
    }

    actualizarUsuario = async (id, datosActualizados) => {
      const User = mongoose.model('User',ConexionMongoose.userSchema)
      const usuarioActualizado = await User.findByIdAndUpdate(id, datosActualizados, { new: true });
      return usuarioActualizado;
     }

    
  eliminarUsuario = async (id) => {
    const User = mongoose.model('User',ConexionMongoose.userSchema)
    const UsuarioAEliminar = await this.findUserById(id)
    await User.deleteOne( { _id: id })
    return UsuarioAEliminar
}

  puedeLogearse = async (name, pass) => {
    const User = mongoose.model('User',ConexionMongoose.userSchema)
    const usuarioBuscado = await User.findOne({ user: name, pass: pass });
    return usuarioBuscado
  }
}
export default UserModel