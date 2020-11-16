/**Créer un programme qui exécute un serveur sur un port spécifique et retourne <h1>Hello World!</h1> */

let http = require('http')

let server = http.createServer((request, response) =>{
    response.writeHead(200,{
        'Content-type': 'text/html; charset=utf-8'
    })
    response.end('Hello World !')
}).listen(4242)