const http = require('http') //import model http


//creation server         req=>talab res=>reponse
const server = http.createServer((req, res) => {
    /*res.statusCode = 200
    res.setHeader('Content-type', 'text/html')
    res.write("welcome \n")
    res.end("done")*/

    if (req.url == '/home') {
        res.statusCode = 200
        res.write('welcome from home')
    } else if (req.url == '/contact') {
        res.statusCode = 200
        res.write('welcome from contact')
    } else if (req.url == '/about') {
        res.statusCode = 200
        res.write('welcom from about')
    } else {
        res.statusCode = 404
        res.write('not found')
    }

    res.end()






})

server.listen(5000, () => (console.log('server runnig')))