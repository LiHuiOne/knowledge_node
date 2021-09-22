//返回的数据，可以调用方法返回统一格式的数据
const responseUntil = function(result){
    console.log(result)
    let responseData=null
    let resObj = {
        status:result?'ok':'fail'
    }
    responseData=Object.assign({},resObj,result)
    return responseData
}

module.exports = responseUntil