import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import cors from 'cors'
import bodyParser from 'body-parser'
// import './api/helpers/connection_redis.js'
import { InitiateMongoServer } from './api/v1/datasources/index.js'
// import connectRedis from 'connect-redis'
// import client from './api/helpers/connection_redis.js'
import route from './api/v1/routes/index.js'
InitiateMongoServer()

const port = 3001

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send(`success`)
})
route(app)
app.listen(port, () => console.log(`listen on ${port} !!!`))

