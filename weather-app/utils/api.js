const request = require("request")
const weather=(address,callback)=>{
  const url='http://api.weatherapi.com/v1/current.json?key=00532184782c4fa190a40053210701&q='+encodeURIComponent(address)
  request({url:url, json:true},(error, response, body)=>{
    if(error){
      callback("Unable to connect to location services",undefined)
    }
    
    else{
        console.log(body)
    } 
  })
}
module.exports=weather
