const express = require('express')
const app = express()
const {engine} = require('express-handlebars')
const routerProducts = require('./src/main')

app.engine("handlebars",engine())

app.set("view engine","handlebars")
app.set("views","./views")

app.use(express.static('public'))
app.use('/productos',routerProducts)

routerProducts.use(express.json())
routerProducts.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('form');
});


// PUERTO

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
        console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
        })
    server.on("error", error => console.log(`Error en servidor ${error}`))


