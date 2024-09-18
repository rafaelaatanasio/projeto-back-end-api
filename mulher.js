const express = require("express") // função 
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({ // enviar pela internet várias informações (objetos)
        nome: 'Rafaela', // sintaxe do objeto mulher
        imagem: 'https://avatars.githubusercontent.com/u/144054244?v=4',
        minibio: 'Desenvolvedora'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)