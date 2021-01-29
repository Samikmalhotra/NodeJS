const express=require('express')
require('./db/mongoose') 
const User = require('./models/users')
const Task = require('./models/tasks.js')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app= express()
const port= process.env.PORT || 3000        

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=>{
    console.log('Server is up on port '+ port)
}) 

const bcrypt = require('bcryptjs')

const myFunction = async() => {
    const password = 'Red123!'
    const hashedPassword = 
}

myFunction()