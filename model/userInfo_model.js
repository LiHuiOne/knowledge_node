const mongoose  = require('mongoose')
//创建规则
const userSchema = new mongoose.Schema({
    name:String,
    password:String
})

//创建集合
const userCollection  = mongoose.model('userInfo',userSchema)

module.exports = userCollection
