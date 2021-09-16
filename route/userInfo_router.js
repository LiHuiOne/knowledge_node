const express =require('express')
const userCollection = require('../model/userInfo_model.js')
const userInfoRouter = express.Router();
const responseUntil = require('../until/response_until.js')
userInfoRouter.get('/save',(req,res,next)=>{
    res.send('admin页面')
    userCollection.create({name:'ccc',password:'ppppp'})
})
userInfoRouter.get('/find', (req,res,next)=>{
    userCollection.findOne().then(result=>{
       res.send(responseUntil(result))
    })
   
})

module.exports=userInfoRouter