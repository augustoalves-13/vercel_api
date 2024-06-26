import 'dotenv/config'
import express, { Router } from 'express'
import cors from 'cors'


const server = express()
const api = Router()

server.use(express.json())
server.use(cors())

api.get('/api' , async (req, resp) => {
    return alert('teste')
})

server.use(api)

server.listen(process.env.PORT ?? 4000, ()=>console.log(`API ONLINE NA PORTA ${process.env.PORT}`))