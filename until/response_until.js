//返回的数据，可以调用方法返回统一格式的数据
const responseUntil = function(result){
    console.log(result)
    let resObj = {
        status:result?'ok':'fail'
    }
    let responseData=Object.assign({},resObj,result)
    console.log(responseData)
    return responseData
}

module.exports = responseUntil