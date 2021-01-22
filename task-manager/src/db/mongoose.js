const mongoose= require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/tak-manager-api',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User',{
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('This email is invalid')
            }
        }
    },
    password:{
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age:{
        type: Number,
        default: 0,
        validate(value){
            if(value<0){
                throw new Error('Age must be a positive number')
            }
        }
    }
})

// const me = new User({
//     name: '  Axel  ',
//     email: 'mike@xxyz.io   ',
//     password: '     phone098    '
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error', error)
// })

const Task = mongoose.model('Task',{
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed:{
        type: Boolean,
        required: false,
        trim: true,
        default: false
    }
})

// const work = new Task({
//     description: 'Complete node.js',
//     completed: false
// })

// work.save().then(()=>{
//     console.log(work)
// }).catch((error)=>{
//     console.log('Error', error)
// })
const task= new Task({
    description: ' Learn Mongoose   '
})
task.save().then(()=>{
    console.log(task)
}).catch((error)=>{
    console.log(error)
})