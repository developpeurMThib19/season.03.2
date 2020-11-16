const http = require('http')
const url = require('url')
const querystring = require('querystring')
const PORT = process.argv[2]

if(!PORT){
    console.log('usage: node e01.js <PORT>')
    process.exit(0)
}
const server = htttp.createServer((req, res) =>{
    console.log('My request dump:')
    
    const {query} = url.parse(req, url)
    console.log(`GET /?${query}`)
    const queryObject = querystring.parse(query)
    for(const[key, value] of Object.entries(queryObject)){
        console.log(`${key}: ${value}`)
    }
    res.write('done')
    res.end()
})

server.listen(PORT, () =>{
    console.log(`Server started at http://localhost:${PORT}`)
})
