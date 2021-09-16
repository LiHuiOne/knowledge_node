const responseUntil = function(params){
    console.log(params)
    let resObj = {
        status:'ok'
    }
    let responseData=Object.assign({},resObj,params)
    console.log(responseData)
    return responseData
}

module.exports = responseUntil