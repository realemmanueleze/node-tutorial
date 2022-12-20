const os = require('os')

// console.log(os.userInfo())

const currentOS = {
    name : os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMomory: os.freemem(),
}

console.log(currentOS)