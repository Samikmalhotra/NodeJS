// const request = require('request');
// const fs= require('fs')
// const geocode = require('./utils/geocode.js')
// const options = {
//   method: 'GET',
//   url: 'https://community-open-weather-map.p.rapidapi.com/weather',
//   qs: {
//     q: 'London,uk',
//     lat: '0',
//     lon: '0',
//     id: '2172797',
//     lang: 'null',
//     units: '"metric" or "imperial"',
//     json: true
//   },
//   headers: {
//     'x-rapidapi-key': '28794ab74emsh611b917122452f3p1c074cjsneeffdf246099',
//     'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
//     useQueryString: true,
//     json: true
//   },



  
// };

// // request(options, (error, response, body)=> {
// // 	if (error) throw new Error(error);
// //   fs.writeFileSync('weather.json', body)
// //   const data=JSON.parse(body)
// // 	console.log(data.main.temp);
// // });


// const url="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FtNjYiLCJhIjoiY2tpcnRqZzM1MmE2dDMxcWplcjN6b3F6OCJ9.Fx66vt1pgPk86NkAKBIooQ&limit=1"
// request({url: url, json: true}, (error, response)=>{
//   const lat= response.body.features[0].center[1]
//   const long= response.body.features[0].center[0]
//   console.log(lat)
//   console.log(long)
// })
const request = require('request');
const fs= require('fs')
const geoCode = require('./utils/geocode.js')
const forecast= require('./utils/forecast.js')

geoCode('Boston',(error, data)=>{
  console.log('Error', error)
  console.log('Data', data)
})

forecast(123, 123, (error, data)=>{
  console.log('Error', error)
  console.log('Data', data)
})