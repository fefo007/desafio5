const express = require('express')
const app = express()
const {Router}= require('express')
const routerProducts=Router()
const Api = require('./api')
const api = new Api()

app.use(express.static('public'))
app.use('/productos',routerProducts)

app.set('views', '../views');
app.set('view engine', 'ejs');

routerProducts.use(express.json())
routerProducts.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('pages/index');
});

routerProducts.get('/', (req, res) => {
    let completeList=api.getAll()
    res.render("pages/table",{ completeList })
});

routerProducts.post('/', (req, res) => {
    api.save(req.body)
    res.render('pages/index')
});

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))