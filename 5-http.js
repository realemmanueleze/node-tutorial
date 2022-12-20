const http = require('http')

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.end("Hello world. Home Page Ojalamo")
    }
    if (req.url === '/about'){
        res.end("Why do you want to know everything, sigh!")
    }
    res.end(`
    <h1>Oops!</h1>
    <h2>Your are lost my friend</h2>
    <h3>If this was unintentional go <a href="/">home</a></h3>
    <p>If not, enjoy your freedom!</p>
    `)
})

server.listen(5000)