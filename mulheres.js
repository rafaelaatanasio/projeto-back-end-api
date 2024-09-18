const express = require("express") // função
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [ // criando objetos
    {
        nome: 'Rafaela Atanásio',
        imagem: 'https://avatars.githubusercontent.com/u/144054244?v=4',
        minibio: 'Desenvolvedora'
    },
    {
        nome: 'Simaria Conceição',
        imagem: 'https://github.com/simariaconceicao.png',
        minibio: 'Desenvolvedora e Instrutora'
    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Hacker antirracista'
    },
]

function mostraMulheres(request, response) { // com o verbo http
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)