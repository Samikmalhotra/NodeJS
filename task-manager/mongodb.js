//CRUD create read  update delete

// const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient
// const ObjectID=mongodb.ObjectID

const {MongoClient, ObjectID}=require('mongodb')

const connectionURL= 'mongodb://127.0.0.1:27017'
const databaseName='task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())
// console.log(id.id)
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL,{useUnifiedTopology:true},(error,client)=>{
    if(error){
        return console.log('Unable to connect to database!')
    }
    const db= client.db(databaseName)

//     db.collection('users').insertOne({
//         _id: id,
//         name:'Alex',
//         age: 29
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

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Renew subscription',
    //         completed: false
    //     },
    //     {
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ],(error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert')
    //     }
    //     console.log(result.ops)
    // })

        // db.collection('users').findOne({name:'Jen'}, (error, user)=>{
        //     if(error){
        //         console.log('Unable to fetch')
        //     }
        //     console.log(user)
        // })
        // db.collection('users').findOne({_id: new ObjectID("5ffec1578eff7239a0a6ff1b")}, (error, user)=>{
        //     if(error){
        //         console.log('Unable to fetch')
        //     }
        //     console.log(user)
        // })
        // db.collection('users').find({age: 27}).toArray((error, users)=>{
        //     console.log(users)
        // })
        // db.collection('users').find({age: 27}).count((error, count)=>{
        //     console.log(count)
        // })
        // db.collection('tasks').findOne({_id: new ObjectID("5ffdf06feff77f24d42f19a0")}, (error,task)=>{
        //     if(error){
        //         console.log('Unable to fetch data')
        //     }
        //     console.log(task)
        // })
        // db.collection('tasks').find({completed: false}).toArray((error, tasks)=>{
        //     console.log(tasks)
        // })

            // db.collection('users').updateOne({
            //        _id: new ObjectID("5ffd943bf4b6e034843d231e")
            //    }, {

            //        $inc: {
            //            age: 1
            //        }
            //    }).then((result) => {
            //        console.log(result)
            //    }).catch((error) => {
            //        console.log(error)
            //    })
            // db.collection('tasks').updateMany({
            //     completed: false
            // }, {
            //     $set: {
            //         completed: true
            //     }
            // }).then((result) => {
            //     console.log(result.modifiedCount)
            // }).catch((error) => {
            //     console.log(error)
            // })
           
                // db.collection('users').deleteMany({
                //     age: 27
                // }).then((result)=>{
                //     console.log(result)
                // }).catch((error)=>{
                //     console.log(error)
                // })
                // db.collection('tasks').deleteOne({
                //     description: 'Clean the house'
                // }).then((result)=>{
                //     console.log(result)
                // }).catch((error)=>{
                //     console.log(error)
                // })
})
