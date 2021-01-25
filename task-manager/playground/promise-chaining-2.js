require('../src/db/mongoose')
const Task = require('../src/models/tasks')

// Task.findByIdAndDelete('600d85bcd18793344c790c1d').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async(id, completed) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: completed})
    return count
}

deleteTaskAndCount('600d7aeb616dce05544f05d7', false).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})