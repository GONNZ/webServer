const http = require('http')

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' })


        let salida = {
            server: 'Node',
            dev: 'gonnz',
            year: 2020,
            ruta: req.url
        }
        res.write(JSON.stringify(salida))

        res.end()
    })
    .listen(3000)

console.log('Server running');