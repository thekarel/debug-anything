const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3456;
const serverUrl = `http://${hostname}:${port}`

const getNameFromReq = (req) => {
  const {name} = url.parse(req.url, true).query;

  return name
}

const getGreeting = (name) => {
  const greeting = `Hello, ${name}!`

  return greeting
}

const server = http.createServer((req, res) => {
  const name = getNameFromReq(req)
  const greeting = getGreeting(name)

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`${greeting}\n`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at ${serverUrl}`);
});
