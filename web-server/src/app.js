const path = require('path')
const express = require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode.js')
const forecast=require('./utils/forecast.js')
const weather = require('./utils/api.js')

const app = express()

// Define paths for Express configs
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath= path.join(__dirname, '../templates/views')
const partialsPath= path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Sam'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Sam'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Sam'
    })
})
app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search query'
        })
    }
    // console.log(req.query)
    console.log(req.query.search)
    res.send({
        products:[]
    })
})
app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error:'You must provide an address'
        })        
    }
    else{
        // geocode(req.query.address,(error,{longitude,latitude,location}={})=>{
        //     if(error){
        //         return res.send({error: error})
        //     }
        //     forecast(longitude,latitude,(error, forecastData)=>{
        //         if(error){
        //             return res.send({error: error})
        //         }
        //         res.send({
        //             location: location,
        //             forecastData: forecastData,
                    
        //         })

        //     })
        // })
        weather(req.query.address,(error, forecastData)=>{
            if(error){
                return res.send({error: error})
            }
            res.send({
                forecastData: forecastData
            })
            
        })
    }
    // res.send({
    //     forecast: 'It is snowing',
    //     location: 'Philadelphia', 
    //     address: req.query.address
    // })
})
app.get('/help/*',(req,res)=>{
    res.render('helperror',{
        title:'404',
        message:'Help article not found',
        name:'Sam'
    })
})
app.get('*', (req,res)=>{
    res.render('error',{
        title:'404',
        message: 'Page not found',
        name: 'Sam'
    })
})
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})