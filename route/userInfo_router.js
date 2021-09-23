const express =require('express')
const userCollection = require('../model/userInfo_model.js')
const userInfoRouter = express.Router();
const responseUntil = require('../until/response_until.js')
const {setToken} = require('../until/jwt_token.js')
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
    userCollection.findOne(params).then(result=>{
        let resObj={
            token:setToken(req.body.name,req.body.password),
            result
        }
       res.send(responseUntil(resObj))
    })
   
})

module.exports=userInfoRouter