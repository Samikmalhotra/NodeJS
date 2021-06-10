require('../src/db/mongoose')
const Task = require('../src/models/tasks')



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
