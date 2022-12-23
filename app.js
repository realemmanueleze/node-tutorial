import { resolveSoa } from 'dns'
import http from 'http'

const server = http.createServer((req, res)=>{
  if(req === '/'){
    res.end(`<h1>Fio Fio moda fuka!!, we made it`)
  }
  res.end("You hit the wrong address man, get your act together")
})

server.listen(5000)