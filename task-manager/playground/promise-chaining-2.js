require('../src/db/mongoose')
const Task = require('../src/models/tasks')

Task.findByIdAndDelete('').then((task)=>{
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})