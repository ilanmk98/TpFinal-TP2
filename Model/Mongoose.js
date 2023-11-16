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
            user:{type:String,required:true},
            pass:{type:String,required:true},
           consumer:{type:Boolean,required:true},
           contact:{type:String,required:true},
           comidas:[{
            type:Schema.Types.ObjectId,
            ref:'Food'
           }]
        })
        this.comidaSchema = new Schema({
            name:{type:String,required:true},
            description:{type:String,required:true},
            price:{type:Number,required:true},
            restaurantId:{type:mongoose.Schema.Types.ObjectId,required:true},
            quantity:{type:Number,required:true},
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