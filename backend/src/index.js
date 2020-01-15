const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb://omnistack:omnistack@cluster0-shard-00-00-brisu.mongodb.net:27017,cluster0-shard-00-01-brisu.mongodb.net:27017,cluster0-shard-00-02-brisu.mongodb.net:27017/week10?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

app.use(express.json()) //tem que vir antes
app.use(routes)

app.listen(3333)

// Métodos http: get, post, put, delete

// Tipos de parâmetros:

// Query Params: request.query (filtros, ordenação, paginação, etc)
// Route Params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criação ou alteração de um registro)

// MongoDB (não-relacional)