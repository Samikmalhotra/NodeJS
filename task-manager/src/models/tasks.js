const mongoose= require('mongoose')

const taskSchema = new mongoose.Schema({
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

// taskSchema.pre('save', async function(next){
//     const task = this

//     if(task.isModified('descr'))

//     next()
// })

const Task = mongoose.model('Task', taskSchema)

module.exports= Task