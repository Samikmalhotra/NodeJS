const mongoose= require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/tak-manager-api',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User',{
    name:{
        type: String
    },
    age:{
        type: Number
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