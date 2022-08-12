const http = require('http');

const server = http.createServer((req,res)=>{
  if (req.url === '/') {
      res.write('welcome to our home page')
  }
  if (req.url === '/about') {
    res.write('welcome to our about page')
  }
  
  res.end(`
  <h1> oops!!! </h1>
  <a href='/'>GO home</a>`)
  
})

server.listen(5000)