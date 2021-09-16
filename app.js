const express = require('express')
const mongoose  = require('mongoose')
const bodyParse = require('body-parser')
const userInfoRouter = require('./route/userInfo_router')
mongoose.connect('mongodb://localhost/knowledge').then(()=>{
    console.log("数据库连接成功")
})
const app = express()

app.use(bodyParse.json())
    .use(bodyParse.urlencoded({extended:false}))
    .use((req,res,next)=>{
        //跨域处理
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Headers', 'Content-type');
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
        res.header('Access-Control-Max-Age',1728000);//预请求缓存20天
        next();  
    })
//模块路由
app.use('/home',userInfoRouter)


app.listen(6060)
console.log("服务启动成功")