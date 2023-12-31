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

   actualizarComida = async (id, comidaNueva) => {
    const res = validar(comidaNueva)
    if(res.result){
        const comidaActualizada = await this.foodModel.actualizarComida(id, comidaNueva)
        return comidaActualizada
    } else{
        console.log(res.error)
        throw res.error
    }
    
   }

   eliminarComida = async comidaId => {
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