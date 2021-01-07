const request = require("request")
const weather=(address,callback)=>{
  const url='http://api.weatherapi.com/v1/current.json?key=00532184782c4fa190a40053210701&q='+encodeURIComponent(address)
  request({url:url, json:true},(error, response, body)=>{
    if(error){
      callback("Unable to connect to location services",undefined)
    }
    else if(body.length === 0){
      callback("Unable to find location", undefined)
    }
    else{
      callback(undefined,{
        location: body.location.name,
        time: body.location.localtime,
        report: 'The weather is '+body.current.condition.text+' and wind speed is '+body.current.wind_kph+' kph.'
      })
    } 
  })
}
module.exports=weather
