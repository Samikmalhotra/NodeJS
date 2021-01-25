require('../src/db/mongoose')
const Task = require('../src/models/tasks')

Task.findByIdAndDelete('600d85bcd18793344c790c1d').then((task)=>{
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})