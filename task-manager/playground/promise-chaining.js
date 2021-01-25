require('../src/db/mongoose')
const User = require('../src/models/users')

//600aa1a0ccb793040466125f

User.findByIdAndUpdate('600aa1a0ccb793040466125f',{ age: 1}).then((user)=>{
    console.log(user)
    return User.countDocuments({age:1})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})