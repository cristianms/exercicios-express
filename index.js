const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const saudacao = require('./saudacaoMid')

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(saudacao('Cristian'))

app.use((req, res, next) => {
    console.log('Antes...')
    next()
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Relatório cliente: completo ${req.query.completo} ano ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })
    // req.on('end', function() {
    //     res.send(corpo)
    // })
    res.send(req.body) //bodyParser já fez a interpretação
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado`)
})

//app.use ou app.all = todos tipo de requisicao
app.get('/opa', (req, res, next) => {
    console.log('Durante...')
    //res.send('Estou bem...') //envia resposta texto
    // res.json({
    //     "nome": "Cristian",
    //     "idade": 32
    // }) //envia resposta json
    res.json([
        {"nome": "Cristian", "idade": 32},
        {"nome": "Bruna", "idade": 25},
    ]) //envia resposta json

    next()
})

app.use((req, res, next) => {
    console.log('Depois...')
    next()
})
    
app.listen(3000, () => {
    console.log('Backend executando...')
})