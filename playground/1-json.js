
const fs=require('fs')
// const book={
//     title: 'abc',
//     author: 'cba'
// }
// const bookJSON= JSON.stringify(book)
// // console.log(bookJSON)

// // const parsedData=JSON.parse(bookJSON)
// // console.log(parsedData.author)

// fs.writeFileSync('1-json.json', bookJSON)   

// const dataBuffer= fs.readFileSync('1-json.json')
// const dataJSON= dataBuffer.toString()
// const data= JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer= fs.readFileSync('1-json.json')
const dataJSON= dataBuffer.toString()
const data= JSON.parse(dataJSON)
   
data.name= 'Sam'
data.age= '18'
console.log(data)

const da=JSON.stringify(data)

fs.writeFileSync('1-json.json', da)
