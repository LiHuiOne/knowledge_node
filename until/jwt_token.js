const jwt = require('jsonwebtoken')
const scret = 'knowledge';  //自定义秘钥  自定义，没要求
let setToken =  function(str1,str2){
    let user = str1;   //这里我是把登录账号和密码作为了规则
    let paswd = str2;
    const rule = {
        username: user,
        pwd: paswd
    }
    
    let ztoken =  jwt.sign(rule, scret, { expiresIn: 60*60*24 }) 
    return ztoken
}
//async  await  解决异步请求获取不到问题
let verifyToken = async function(token){
    await jwt.verify(token, scret, function (err, data) {
        if (err) return false
        else return true
       
    })
}
//导出多个时候，不能使用module.exports=setToken 方式导出，因为module.exports只能指向一个，引入的时候要以对象{setToken}引入
module.exports.setToken =  setToken 

module.exports.verifyToken = verifyToken


