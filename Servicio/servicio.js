import FoodModel from '../Model/FoodModel.js'
import UserModel from '../Model/UserModel.js'


class Servicio {
    constructor() {
        this.foodModel = new FoodModel()
        this.userModel = new UserModel()
    }

   guardarComida = async (comida, restoId) => {
    const comidaGuardada = await this.foodModel.guardarComida(comida, restoId)
    return comidaGuardada
   }

   obtenerComidas = async (comidaId, restoId) => {
    const comidas = await this.foodModel.obtenerComidas(comidaId, restoId)
    return comidas
   }

   actualizarComida = async (comidaId, comidaNueva) => {
    const comidaActualizada = await this.foodModel.actualizarComidaPorId(comidaId, restoId, comidaNueva)
    return comidaActualizada
   }

   eliminarComida = async (comidaId, restoId) => {
    const comidaEliminada = await this.foodModel.eliminarComida(comidaId, restoId)
    return comidaEliminada
   }

}


export default Servicio