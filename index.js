const http = require('http');
const url = require('url');

let server = http.createServer((req, res) => {

    //
    let parsedUrl = url.parse(req.url, true);
    console.log(req);
    res.end('Hello world');
});

server.listen(3000, () => {
    console.log('listening to server');
})