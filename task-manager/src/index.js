const express=require('express')
require('./db/mongoose') 
const User = require('./models/users')
const Task = require('./models/tasks.js')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app= express()
const port= process.env.PORT || 3000        

// app.use((req,res,next)=>{
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled')
//     }else{
//         next()
//     }
// })

// app.use((req,res,next)=>{
//     res.status(503).send('Site is under maintenance')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=>{
    console.log('Server is up on port '+ port)
}) 

// const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



// const myFunction = async() => {
//     // const password = 'Red123!'
//     // const hashedPassword = await bcrypt.hash(password, 8)

//     // console.log(password)
//     // console.log(hashedPassword)

//     // const isMatch = await bcrypt.compare('Red123!', hashedPassword)
//     // console.log(isMatch)

//     const token = jwt.sign({_id:'abc123'},'thisismytoken', {expiresIn: '7 days'})
//     console.log(token)
    
//     console.log(jwt.verify(token, 'thisismytoken'))
// }

// myFunction()

const pet = {
    name: 'Hal'
}
console.log(JSON.stringify(pet))