const express =require('express')
const userCollection = require('../model/userInfo_model.js')
const userInfoRouter = express.Router();
const responseUntil = require('../until/response_until.js')
userInfoRouter.get('/save',(req,res,next)=>{
    userCollection.create({
        name:'admin',
        password:'123'
    })
    res.send("ppp")
    
})
userInfoRouter.post('/login', (req,res,next)=>{
    let params={
        name:req.body.name,
        password:req.body.password
    }
    console.log(req)
    userCollection.findOne(params).then(result=>{
       res.send(responseUntil(result))
    })
   
})

module.exports=userInfoRouter