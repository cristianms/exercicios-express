const express = require('express')
const app = express()

//app.use ou app.all = todos tipo de requisicao
app.post('/teste1', (req, res) => {
    //res.send('Estou bem...') //envia resposta texto
    
        // res.json({
        //     "nome": "Cristian",
        //     "idade": 32
        // }) //envia resposta json
        

        res.json([
            {"nome": "Cristian", "idade": 32},
            {"nome": "Bruna", "idade": 25},
        ]) //envia resposta json
})

app.listen(3000, () => {
    console.log('Backend executando...')
})