const mongoose=require("../config/db");

// const Schema=mongoose.Schema;

const blogSchema=new mongoose.Schema({
    // _id:mongoose.Schema.Types.ObjectId,
    title:String,
    body:String,
    author:String,
    author_email:String,
    author_photoURL:String,
    like:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users', // Replace with the actual model name you want to reference
    }],
},{ collection: 'Blogs' });

const Blogs=new mongoose.model("Blogs",blogSchema)

module.exports = {
    "model":Blogs,
    "schema":blogSchema,
}