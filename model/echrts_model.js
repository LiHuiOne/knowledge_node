const mongoose  = require('mongoose')
//创建规则
const echartSchema= new mongoose.Schema({
    name:String,
    type:String,//echarts类型
    description:String,
    code:String,
    imageSrc:String
})
//创建集合
const echartCollection = mongoose.model('echartInfo',echartSchema)

module.exports = echartCollection

