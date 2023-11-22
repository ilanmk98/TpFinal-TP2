import ConexionMongoose from "./Mongoose.js";
import mongoose, { mongo } from "mongoose"

class FoodModel{
    constructor(){
      this.foodSchema=ConexionMongoose.getFoodSchema();
    }



    guardarComida = async (food)=>{
        const Food = mongoose.model('Food',this.foodSchema)
        const toSave = new Food({
            name:food.name,
            description:food.description,
            price:food.price,
            restaurantId:food.restaurantId,
            quantity:food.quantity
        })
        toSave.save()
    .then((documentoGuardado) => {
      console.log('Documento guardado:', documentoGuardado);
    })
    .catch((error) => {
      console.error('Error al guardar el documento:', error);
    });
    }

  obtenerComidas = async () =>{
    const Food = mongoose.model('Food',this.foodSchema)
        const comidas = await Food.find({})
        return comidas
      
  }

  mostrarComidas = async()=>{
    const Food = mongoose.model('Food',this.foodSchema)
    const comidas = await Food.find({ quantity: { $gt: 0 } })
    return comidas
  }

   actualizarComida = async (id, datosActualizados) => {
    const Food = mongoose.model('Food',this.foodSchema)
    console.log(id)
    console.log(datosActualizados)
    const comidaActualizada = await Food.findByIdAndUpdate(id, datosActualizados, { new: true });
    return comidaActualizada;
   }

  eliminarComida = async (id) => {
    const Food = mongoose.model('Food',this.foodSchema)
    const comidaAEliminar = await this.obtenerComidas(id)
    await Food.deleteOne( { _id: id })
    return comidaAEliminar
}


}
export default FoodModel