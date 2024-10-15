const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;


const fs = require('fs');
console.log(fs)

const server = createServer((req, res) => {
if(req.url === '/' || req.get === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');

}else if(req.url === '/page1'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    const data = fs.readFileSync('C:/laragon/www/Tafe/TAFE-web_development_back_end/week4/Lab04_(2)/Lab04/exampleServer/file.text'); // blocks here until file is read

    console.log(data);
    res.end('Page 1' + data);
}
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});