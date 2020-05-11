const express = require('express')
const app = express()
const hbs = require('hbs');
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials', (err) => console.log)
app.set('view engine', 'hbs');

// Helpers
require('./hbs/helpers')

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Carlos',
        anio: new Date().getFullYear()
    })
})

app.get('/about', (req, res) => {

    res.render('partials/about', {
        anio: new Date().getFullYear()
    })
})

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))