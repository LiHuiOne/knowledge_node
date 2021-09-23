const express =require('express')
const echartsCollection = require('../model/echrts_model.js')
const echartsRouter = express.Router();
const responseUntil = require('../until/response_until.js')

//新增
echartsRouter.post('/save',(req,res,next)=>{
    echartsCollection.create(req.body).then(result=>{
        res.send(responseUntil(result))
    })
})

//列表
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

//修改

echartsRouter.post('/modify',(req,res,next)=>{
    let obj={
        name:req.body.name,
        type:req.body.type,
        description:req.body.description,
        code:req.body.code,
        imageSrc:req.body.imageSrc
    }
    echartsCollection.updateOne({_id:req.body._id},obj).then(result=>{
        res.send(responseUntil(result))
    })
})

//删除
echartsRouter.post('/delete',(req,res,next)=>{
    echartsCollection.deleteOne({_id:req.body.id}).then(result=>{
        res.send(responseUntil(result))
    })
})
module.exports=echartsRouter