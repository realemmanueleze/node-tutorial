const { readFile, writeFile } = require("fs");

console.log('start')

readFile('./Content/first.txt', 'utf8', (error, result)=>{
  if(error) {
    console.log(error)
    return
  }
  const first = result
  readFile('./Content/second.txt', 'utf8', (error, result)=>{
    if(error){
      console.log(error)
      return
    }
    const second = result
    writeFile('./Content/result-async.txt', `Here's the result: ${first}, ${second}`, (error, result)=>{
      if(error){
        console.log(error)
        return
      }
      console.log('done with this task')
      return
    })
  })
})

console.log('starting next task')

