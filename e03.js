const http = require('http');
const fs = require('fs');

function onRequest(request, response){
    response.writeHead(200, {'content-Type': 'text/plain'});
    fs.readFile('./index.html', null, function(error, data){
        if (error){
            response.writeHead(404);
            response.write('Pas de fichier !');
        }else{
            response.write(data);
        }
        response.end();
    });
}
http.createServer(onRequest).listen(4242)