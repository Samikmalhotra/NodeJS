//CRUD create read  update delete

const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient

const connectionURL= 'mongodb://127.0.0.1:27017'
const databaseName='task-manager'

MongoClient.connect(connectionURL,{useUnifiedTopology:true},(error,client)=>{
    if(error){
        return console.log('Unable to connect to database!')
    }
    const db= client.db(databaseName)

//     db.collection('users').insertOne({
//         name:'Sam',
//         age: 27
//     }, (error, result)=>{
//         if (error){ 
//             return console.log('Unable to Insert User')
//         }
//         console.log(result.ops)
// })

    // db.collection('users').insertMany([
    //     {
    //         name:'Jen',
    //         age:27
    //     },
    //     {
    //         name: 'Gunther',
    //         age: 30
    //     }
    // ],(error, result)=>{
    //     if(error){
    //         return console.log('Unable to Insert')
    //     }
    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        {
            description: 'Clean the house',
            completed: true
        },
        {
            description: 'Renew subscription',
            completed: false
        },
        {
            description: 'Pot plants',
            completed: false
        }
    ])


})
