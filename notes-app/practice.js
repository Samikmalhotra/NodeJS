//const fs=require('fs')
//fs.writeFileSync('notes.txt', 'This file was created by node.js')
//fs.appendFileSync('notes.txt',' My name is Sam')
//const name="Sam"

//const name=require('./utils.js')
//console.log(name)

//const add = require('./utils.js')
//const sum= add(4,-2)
//console.log(sum)

//const validator = require('validator')
//const getNote =require('./notes.js')
//console.log(getNote())
//console.log(validator.isEmail('xample.com'))
//console.log(validator.isURL('xample.com'))

//const chalk=require('chalk')
//console.log(chalk.green.bold("Yay"))
//console.log(process.argv[2])

// const validator = require('validator')
// const chalk=require('chalk')
// const getNote=require('./notes.js')

// const { describe } = require('yargs')
// // const command=process.argv[2]
/*if(command==='add'){
    console.log("Adding file")
} 
else if(command==='remove'){
    console.log("Removing file")
}*/
// console.log(yargs.argv)
// const yargs= require('yargs')
// // Customize yargs version
// yargs.version('1.1.0')

// // Create add comment
// yargs.command({
//     command: 'add',
//     describe: 'Add a new note',
//     handler: function () {
//         console.log('Adding a new note!')
//     }
// })

// // create remove command
// yargs.command({
//     command: 'remove',
//     describe: 'Remove a note',
//     handler: function(){
//         console.log('Removing a note')
//     }
// })


const chalk = require('chalk')
const { demandOption } = require('yargs')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (x) {
        console.log('Title: '+ x.title)
        console.log('Body: ' + x.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes')
    }
})

// Create read command  
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})
yargs.parse()
