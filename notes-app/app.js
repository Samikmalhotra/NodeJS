const chalk = require('chalk')
const { demandOption } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

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
    handler(x) {
        notes.addNote(x.title, x.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Remove note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(y) {
        notes.removeNote(y.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes();
    }
})

// Create read command  
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Read note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(z) {
        notes.readNote(z.title);
    }
})
yargs.parse()
