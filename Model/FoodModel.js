import ConexionMongoose from "./Mongoose.js";
import mongoose from "mongoose"

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
            restaurantId: food.restaurantId,
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

  obtenerComidas = async()=>{
      const Food = mongoose.model('Food',this.foodSchema)
      const comidas = await Food.find({})
      return comidas
  }

   actualizarComida = async (id, datosActualizados) => {
  try {
    const comidaActualizada = await Food.findByIdAndUpdate(id, datosActualizados, { new: true });
    if (!comidaActualizada) {
      return null;
    }
    console.log('Comida actualizada:', comidaActualizada);
    return comidaActualizada;
  } catch (error) {
    console.error('Error al actualizar la comida:', error);
    throw error;
  }
}

  eliminarComidaPorId = async (id) => {
  try {
    const resultado = await Food.findByIdAndRemove(id);

    if (!resultado) {
      console.log('La comida con el ID proporcionado no se encontró.');
      return; 
    }

    console.log('Comida eliminada con éxito.');
  } catch (error) {
    console.error('Error al eliminar la comida:', error);
    throw error;
  }
}

findFoodById = async (idComida)=>{
  const Food = mongoose.model('Food',this.foodSchema)
  const comida = await Food.findById(idComida)
  return comida;
}
}
export default FoodModel