const express =require('express')
const echartsCollection = require('../model/echrts_model.js')
const echartsRouter = express.Router();
const responseUntil = require('../until/response_until.js')

echartsRouter.post('/save',(req,res,next)=>{
    echartsCollection.create(req.body).then(result=>{
        res.send(responseUntil(result))
    })
})

echartsRouter.get('/index',(req,res,next)=>{
    echartsCollection.find().then(result=>{
        res.send(responseUntil(result))
    })
})

module.exports=echartsRouter