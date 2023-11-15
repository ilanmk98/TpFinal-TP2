import config from '../config.js'
import mongoose, { Schema } from "mongoose"

class ConexionMongoose{
   
    static userSchema = null
    static comidaSchema = null
   
    static conectar = async  _ =>{
        mongoose.connect(config.STRCNX);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
        db.once('open', () => {
          console.log('Conexión exitosa a la base de datos');
          //this.loadSchemas();
        });
        
    }

   static loadSchemas = ()=>{
        console.log('Cargando schemas');
        this.userSchema = new Schema({
            user:String,
            pass:String,
           consumer:Boolean,
           contact:String,
           comidas:[{
            type:Schema.Types.ObjectId,
            ref:'Food'
           }]
        })
        this.comidaSchema = new Schema({
            name:String,
            description:String,
            price:Number,
            restaurantId:mongoose.Schema.Types.ObjectId,
            quantity:Number,
        })
        
    }

    static getUserSchema()
    {
        if (this.userSchema===null)
        {  this.loadSchemas(); }    
        return this.userSchema;
    }
    static getFoodSchema(){
        if (this.comidaSchema===null)
        {  this.loadSchemas(); }    
        return this.comidaSchema;
    }




}

export default ConexionMongoose