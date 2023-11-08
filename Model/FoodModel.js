import ConexionMongoose from "./Mongoose.js";
import mongoose from "mongoose"

class FoodModel{
    constructor(){
        this.foodSchema=ConexionMongoose.loadSchemas();
    }



    guardarComida = async (food)=>{
      
        const Food = mongoose.model('Food',ConexionMongoose.foodSchema)
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
        const Food = mongoose.model('Food',ConexionMongoose.foodSchema)
        const comidas = await Food.find({})
        console.log(comidas);
        return comidas
    }
}
export default FoodModel