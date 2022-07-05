import http from 'http'

const server = http.createServer((_, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
})

const host = 'localhost'
const port = 3000

server.listen(3000, host, () => {
  console.log(`Server running at \x1b[32mhttp://${host}:${port}/\x1b[39m`)
})
