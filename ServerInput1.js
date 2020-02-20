//create a NODEJS Server
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    
    if(url ==='/'){

    //Headers are the meta data that represents certain informations.
res.write('<html>');
res.write('<title> My First Page </title>');
res.write('<body><form action = "/message" method = "POST"><input type = "text" name = "message"></body>');
res.write('</html>');
return res.end();
    }
    if( url === '/message' && method === 'POST'){
        const body = [];
        req.on('data',(chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            //console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt',message);
            res.statusCode = 302; //redirection
            res.setHeader('Location','/');
            return res.end();
        });
        
  
    }

    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title> My First Node app</title></head>')
    res.write('</html>');
    res.end();
});




server.listen(3010);
