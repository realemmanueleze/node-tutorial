const EventEmitter = require('events')

const CustomEmitter = new EventEmitter()

CustomEmitter.on('response', (name, id) => {
  console.log(`data recieved from ${name} with th id: ${id}`)
})

CustomEmitter.on('response', () => {
  console.log(`some other logic`)
})

CustomEmitter.emit('response', 'john', 32)