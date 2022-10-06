const express = require('express')
const app = express()
const routerProducts=require('./src/main')

app.use(express.static('public'))
app.use('/productos',routerProducts)

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index');
});

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))