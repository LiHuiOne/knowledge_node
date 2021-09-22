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
    const skipCount = (parseInt(req.query.currentPage-1))*parseInt(req.query.pageSize)
    echartsCollection.find().then(response=>{
        echartsCollection.find().skip(skipCount).limit(parseInt(req.query.pageSize)).then(result=>{
            console.log(result)
            let resObj={
                count:Math.ceil(response.length/parseInt(req.query.pageSize)),
                data:result
            }
            res.send(responseUntil(resObj))
        })
    })
})


module.exports=echartsRouter