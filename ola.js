const express = require("express") // função 
const router = express.Router() // função do express, primeira configuração da rota

const app = express()
const porta = 3333

function mostraOla(request, response) {
    response.send("Olar mundo")
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/ola', mostraOla)) //servidor use a rota get chamando o end olá, com a função mostraOla
app.listen(porta, mostraPorta)