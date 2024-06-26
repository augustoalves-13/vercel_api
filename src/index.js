import 'dotenv/config'
import express, { Router } from 'express'
import cors from 'cors'


const server = express()
const api = Router()

server.use(express.json())
server.use(cors())

api.get('/api/:name' , async (req, resp) => {
    try {
        const name = req.params.name
        
        if(name.length < 3) throw new Error('teste testando')

        resp.send(`Olá ${name}`)
        resp.json(`Olá ${name}`)
        alert(`Olá ${name}`)


    } catch (error) {
        resp.status(401).send({
            erro: error.message
        })
    }
})

server.use(api)

server.listen(process.env.PORT ?? 4000, ()=>console.log(`API ONLINE NA PORTA ${process.env.PORT}`))