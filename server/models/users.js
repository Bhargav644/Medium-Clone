const mongoose=require("../config/db");

// const Schema=mongoose.Schema;

const userSchema=new mongoose.Schema({
    // _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    photoURL:String,
    follows:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users', // Replace with the actual model name you want to reference
      }],
    followers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users', // Replace with the actual model name you want to reference
      }],
},{ collection: 'Users' });

const Users=new mongoose.model("Users",userSchema)

module.exports = {
    "model":Users,
    "schema":userSchema,
}