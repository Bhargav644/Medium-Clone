const Users = require("../models/users")["model"];
const Blogs = require("../models/blogs")["model"];

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);



const getOneTapCredentials=async(req,res)=>{
    try{
            const { token } = req.body;
            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: process.env.CLIENT_ID,
            });
        
            const { name, email, picture } = ticket.getPayload();
            
            const user = await Users.findOne({ email:email });
            if (user===null) {
                const newUser=new Users({
                    "name":name,
                    "email":email,
                    "photoURL":picture,
                    "follows":[],
                    "followers":[],
                })
                newUser.save().then(() => {
                    return res.sendStatus(201)
                }).catch(err => {
                    if (err) return res.status(400).send({ message: 'Username already exists' });
                })
            }
        
            res.status(201).json({ name, email, picture });
    }
    catch(err){
        // return res.sendStatus(500).json({ message: "Internal Server Error" });
    }
};


const getPopUpCredentials=async(req,res)=>{

    const { name,email,photoURL }=req.body;
    console.log(req.body);
    try{    
            const user = await Users.findOne({ email:email });
            if (user===null) {
                const newUser=new Users({
                    "name":name,
                    "email":email,
                    "photoURL":photoURL,
                    "follows":[],
                    "followers":[],
                })
                await newUser.save();
            }
        
            res.status(201).json({ name, email, photoURL });
    }
    catch(err){
        // return res.sendStatus(500).json({ message: "Internal Server Error" });
    }

}


const writeArticle=async(req,res)=>{
    try{
            const {title,body,name,email,photoURL}=req.body;
            const newBlog=new Blogs({
                title:title,
                body:body,
                author:name,
                author_email:email,
                author_photoURL:photoURL,
                like:[],
            })
            await newBlog.save();
            res.status(201).json({ "message":"Success" });
    }
    catch(err){
        console.log(err);
    }
    
}


const getAllStories=async(req,res)=>{
    try{
        const {email}=req.body;
        const blogs=await Blogs.find({ author_email: email});
        res.status(200).json({...blogs});
    }
    catch(err){
        console.log(err);
    }
}

const getBlogByID=async(req,res)=>{
    const id=req.params.id;

    try{
        const blog=await Blogs.find({_id:id});
        res.status(200).json({...blog});
    }
    catch(err){
        console.log(err);
    }
}

module.exports={
    getOneTapCredentials,
    getPopUpCredentials,
    writeArticle,
    getAllStories,
    getBlogByID
};
