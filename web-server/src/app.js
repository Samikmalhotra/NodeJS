const express= require('express')
const path= require('path')


const app=express()
const publicDirectoryPath= path.join(__dirname, '../public')


app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render("index",{
        title: 'Weather App',
        name: 'Sam'
    })
})
// app.get('',(req,res)=>{ 
//     res.send('<h1>Weather</h1>')
// })
// app.get('/help',(req,res)=>{
//     res.send({
//         name: 'Andrew',
//         age: 27
//     })
// })
// app.get('/about',(req,res)=>{
//     res.send('About page')
// })
app.get('/weather',(req,res)=>{
    res.send('Weather')
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})