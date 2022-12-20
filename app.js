const EventEmitter = require('events')

const customEmitter = new EventEmitter()
console.log(customEmitter)

customEmitter.on('response', (name, id) => {
  console.log(`data recieved from ${name} with th id: ${id}`)
})

customEmitter.on('response', () => {
  console.log(`some other task`)
})

customEmitter.emit('response', 'john', 32)