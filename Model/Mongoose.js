import config from '../config.js'
//const mongoose = require('mongoose');
import mongoose from "mongoose"

class ConexionMongoose{
   
   
    static conectar = async _ =>{
        mongoose.connect(config.STRCNX);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
        db.once('open', () => {
          console.log('Conexión exitosa a la base de datos');
        });
    }

}

export default ConexionMongoose