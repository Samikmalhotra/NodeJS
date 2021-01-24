const mongoose= require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/tak-manager-api',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
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