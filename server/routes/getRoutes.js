const app = require("../config/init");
const controllers=require("../controllers/controllers");


// getting all controllers

const getBlogByID=controllers['getBlogByID']

function routes(){
    app.get("/blog/:id",getBlogByID);
}


module.exports=routes;