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
        required: true
    },
    email:{
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('This email is invalid')
            }
        }
    },
    age:{
        type: Number,
        validate(value){
            if(value<0){
                throw new Error('Age must be a positive number')
            }
        }
    }
})

// const me = new User({
//     name: 'Sam',
//     age: 27
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error', error)
// })

const Task = mongoose.model('Task',{
    description: {
        type: String
    },
    completed:{
        type: Boolean
    }
})

const work = new Task({
    description: 'Complete node.js',
    completed: false
})

work.save().then(()=>{
    console.log(work)
}).catch((error)=>{
    console.log('Error', error)
})