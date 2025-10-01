import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
import mainRoutes from './routes/index.js';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config()

const server = express()

// Configuração do mustache
server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

// Configuração da pasta publica
server.use(express.static(path.join(__dirname, '../public')))

// Configuração de rotas
server.use(mainRoutes)

server.use((req, res) => {
    res.send('Página não encontrada!')
})

server.listen(process.env.PORT, () => {
    console.log('Servidor rodando!')
})