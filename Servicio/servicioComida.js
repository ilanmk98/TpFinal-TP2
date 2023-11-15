import FoodModel from '../Model/FoodModel.js'
import axios from 'axios'


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

   mostrarComidas = async()=>{
    const response = await axios.get('https://api.bluelytics.com.ar/v2/latest');
    const valorBlue = Number(response.data.blue.value_sell)
    let comidas = await this.foodModel.mostrarComidas();
    comidas.forEach(comida=>{comida.price*=valorBlue})
    return comidas;
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