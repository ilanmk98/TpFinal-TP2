import FoodModel from '../Model/FoodModel.js'
import UserModel from '../Model/UserModel.js'


class Servicio {
    constructor() {
        this.foodModel = new FoodModel()
        this.userModel = new UserModel()
    }

   guardarComida = async (comida) => {
    const comidaGuardada = await this.foodModel.guardarComida(comida)
    return comidaGuardada
   }

   obtenerComidas = async (comidaId) => {
    const comidas = await this.foodModel.obtenerComidas(comidaId)
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

}


export default Servicio