import FoodModel from '../Model/FoodModel.js'
import axios from 'axios'
import {validar} from "./validaciones/comida.js"


class Servicio {
    constructor() {
        this.foodModel = new FoodModel()
        
    }

   guardarComida = async comida => {
    const res = validar(comida)
    if(res.result){
        const comidaGuardada = await this.foodModel.guardarComida(comida)
        return comidaGuardada
    }
    else{
        console.log(res.error)
        throw res.error
    }
   }

   obtenerComidas = async (id) => {
    const comidas = await this.foodModel.obtenerComidas(id)
    return comidas
   }

   mostrarComidas = async()=>{
    const response = await axios.get('https://api.bluelytics.com.ar/v2/latest');
    const valorBlue = Number(response.data.blue.value_sell)
    let comidas = await this.foodModel.mostrarComidas();
    comidas.forEach(comida=>{comida.price*=valorBlue})
    return comidas;
   }

   actualizarComida = async (id, comidaNueva) => {
    const comidaActualizada = await this.foodModel.actualizarComida(id, comidaNueva)
    return comidaActualizada
   }

   eliminarComida = async comidaId => {
    const comidaEliminada = await this.foodModel.eliminarComida(comidaId)
    return comidaEliminada
   }
  
}


export default Servicio