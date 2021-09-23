const express = require('express')
const mongoose  = require('mongoose')
const bodyParse = require('body-parser')
const userInfoRouter = require('./route/userInfo_router')
const echartsRouter = require('./route/echarts_router')
const {verifyToken} = require('./until/jwt_token.js')
const expressJWT = require('express-jwt');//验证token是否失效
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
    //使用中间件截取header中的token
    .use((req,res,next)=>{
        //获取header中的token，并验证
        if(req.headers.authorization){
            const flag=verifyToken(req.headers.authorization)
            if(!flag){
                res.send({status:'fail'})
            }
        }
        next()
        
    })
    //token时间是否过期
    app.use(expressJWT({
        secret: 'knowledge',
        algorithms: ['HS256'] //签名算法
    }).unless({
        path: ['/user/login']//登录接口不验证
    }))
    //捕获错误的全局中间件
    app.use(function (err, req, res, next) {
        //过期
        if (err.status == 401) {   
            res.status(401).send({status:'fail'});
            return
        }
        if(err){
            res.status(500).send({status:'fail'});
        }

    });
//模块路由
app.use('/user',userInfoRouter)
app.use('/echart',echartsRouter)


app.listen(6060)
console.log("服务启动成功")