import config from '../config.js'
//const mongoose = require('mongoose');
import mongoose, { Schema } from "mongoose"

class ConexionMongoose{
   
    static userSchema = null
   
    static conectar = async  _ =>{
        mongoose.connect(config.STRCNX);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
        db.once('open', () => {
          console.log('Conexión exitosa a la base de datos');
          this.loadSchemas();
        });
        
    }

   static loadSchemas = ()=>{
        console.log('Cargando schemas');
        this.userSchema = new Schema({
            user:String,
            pass:String,
           consumer:Boolean,
           contact:String 
        })
        
        return this.userSchema;
    }



}

export default ConexionMongoose