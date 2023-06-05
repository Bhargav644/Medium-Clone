const app = require("../config/init");
const controllers=require("../controllers/controllers");
const { OAuth2Client } = require("google-auth-library");




const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);


// getting all controllers

const getOneTapCredentials=controllers['getOneTapCredentials']
const getPopUpCredentials=controllers['getPopUpCredentials']
const writeArticle=controllers['writeArticle'];
const getAllStories=controllers['getAllStories'];

function routes(){
    app.post("/api/google-onetap-login", getOneTapCredentials);
    app.post("/api/google-popup-login", getPopUpCredentials);   
    app.post("/mystories",getAllStories);
    app.post("/write",writeArticle);
}


module.exports=routes;