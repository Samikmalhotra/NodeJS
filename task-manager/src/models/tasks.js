const mongoose= require('mongoose')

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

module.exports= Task