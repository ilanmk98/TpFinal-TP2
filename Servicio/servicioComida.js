import FoodModel from '../Model/FoodModel.js'



class Servicio {
    constructor() {
        this.foodModel = new FoodModel()
        
    }

   guardarComida = async (comida) => {
    const comidaGuardada = await this.foodModel.guardarComida(comida)
    return comidaGuardada
   }

   obtenerComidas = async () => {
    const comidas = await this.foodModel.obtenerComidas()
    return comidas
   }

   actualizarComida = async (comidaId, comidaNueva) => {
    const comidaActualizada = await this.foodModel.actualizarComidaPorId(comidaId, comidaNueva)
    return comidaActualizada
   }

   eliminarComida = async (comidaId) => {
    const comidaEliminada = await this.foodModel.eliminarComida(comidaId)
    return comidaEliminada
   }
   findFoodById = async (idComida)=>{
    const comida = await this.foodModel.findFoodById(idComida)
    if(!comida)
    {
        throw new Error('comida no encontrado');
    }
    return comida;
   }

}


export default Servicio