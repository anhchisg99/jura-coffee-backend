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
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

//swagger
const options = {
    definition:{
        openapi: "3.0.0",
        info:{
            title:"Library",
            version:"1.0.0",
            description:"con ga",
        },
        servers:[
            {url: "http://localhost:3001"},
        ],
    },
    apis:["./src/api/v1/routes/*.js"]
}
//swagger
const specs = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const __dirname = dirname(fileURLToPath(import.meta.url));
InitiateMongoServer()

const port = process.env.PORT || 3001

app.use(cors())
// app.use(express.static('./public'))
app.use(express.static( __dirname + '/public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send(`success`)
})
route(app)
app.listen(port, () => console.log(`listen on ${port} !!!`))

