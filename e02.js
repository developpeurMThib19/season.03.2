/**Créer un serveur qui écrit «Hello World» sur la GETméthode ou Heisenbergsur la POSTméthode */


const http = require('http');
const port = process.argv[2]

if (!port){
    console.log("Usage : node e01.js <PORT>")
    process.exit(0)
}

const requestListener = function(req, res){
    if (req.method === "GET"){
        res.write('Hello World ! ')
    }
    else if (req.method === "POST"){
        res.write("Heisenberg")
    }
    res.end()
}

const server = http.createServer(requestListener);
server.listen(port);