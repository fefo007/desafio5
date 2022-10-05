const express = require('express')
const app = express()
const {Router}= require('express')
const routerProducts=Router()
const Api = require('./api')
const api = new Api()


app.use(express.static('public'))
app.use('/productos',routerProducts)

routerProducts.use(express.json())
routerProducts.use(express.urlencoded({extended: true}))

app.set('views', '../views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('form');
});

routerProducts.get('/',(req,res)=>{
    let completeList=api.getAll()
    res.render("table",{ completeList })
})

routerProducts.post('/',(req,res)=>{
    api.save(req.body)
    res.render("form")
})


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))