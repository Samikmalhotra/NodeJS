require('../src/db/mongoose')
const User = require('../src/models/users')

//600aa1a0ccb793040466125f

// User.findByIdAndUpdate('600aa1a0ccb793040466125f',{ age: 1}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeAndCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, {age: age})
    const count = await User.countDocuments({age: age})
    return count
}

updateAgeAndCount('600aad210462f01ff4516000', 2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})