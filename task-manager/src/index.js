const express=require('express')

const app= express()
const port= process.env.PORT || 3000        

app.post('/user',(req,res)=>{
    res.send('testing!')
})

app.listen(port, ()=>{
    console.log('Server is up on port'+ port)
}) 