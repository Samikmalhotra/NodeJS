const fs=require('fs')
const chalk=require('chalk')


const getNote=()=>{
    return 'Your notes...'
}

const addNote = (title, body)=> {
    const notes= loadNotes()
    const duplicateNote=notes.find(note=> note.title === title)

    debugger
    
    if(!duplicateNote){
        notes.push({
            title:title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added"))
    }
    else{
        console.log(chalk.red.inverse("Note title taken"))
    }
   
}

const saveNotes=(notes)=>{
    const dataJSON= JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes=()=>{
    try{ 
        const dataBuffer= fs.readFileSync('notes.json')
        const dataJSON= dataBuffer.toString()
        const data= JSON.parse(dataJSON)
        return data
    }
    catch(e){
        return []
    }
   
}


const removeNote=(title)=>{
    
    const notes=loadNotes()
    const reqNotes= notes.filter((note)=> note.title !== title)
    if (notes.length > reqNotes.length){
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(reqNotes)
     }
    else{
        console.log(chalk.red.inverse('Note not found'))  
    }
    
}

const listNotes=()=>{
    const notes = loadNotes()
    console.log(chalk.blue.inverse("Your Notes"))
    notes.forEach(element => {
        console.log(element.title)
    });
}

const readNote=(title)=>{
    const notes = loadNotes()
    const read = notes.find(x=> x.title === title)
    if(read){
        console.log(chalk.blue.inverse(read.title))
        console.log(chalk.white.inverse(read.body))
    }
    else{
        console.log(chalk.red.inverse("No note found"))
    }
}

module.exports={
    getNote: getNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}