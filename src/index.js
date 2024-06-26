import 'dotenv/config'
import express, { Router } from 'express'
import cors from 'cors'


const server = express()
const api = Router()

server.use(express.json())
server.use(cors())

api.get('/api' , async (req, resp) => {
    resp.send('API FUNFANDO ')
})

server.use(api)

server.listen(process.env.PORT, ()=>console.log(`API ONLINE NA PORTA ${process.env.PORT}`))