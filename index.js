const conn=require("./config")

const express=require("express");
const app=express();
app.use(express.json())

const joi = require("joi")


const validationMiddleware =(req,res,next) => {
    
    const schema=joi.object().keys({
        name:joi.string().required(),
        age:joi.number()
    })
    
    const {error,value}=schema.validate(req.body)
    const valid = error == null; 
    if (!valid) { 
        res.status(422).json({ 
        message: 'Invalid request', 
        }) 
    }
    next();
}


app.post("/",validationMiddleware,(req,res)=>{
    let data=req.body;
    conn.query('insert into employeetable set?',data,(error,result,fields)=>{
       if(error)error;
       res.send(result);
    })
 })


 app.listen(3000)