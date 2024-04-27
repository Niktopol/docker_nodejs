const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.method == 'GET' && req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./index.html').pipe(res);
    }else{
        res.writeHead(404,{'Content-Type': 'text/plain'});
        res.write('error 404: page not found');
        res.end();
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});