import express from 'express'
const redisRoute = express.Router()
import {set,get} from '../services/redis.js'
redisRoute.post("/",async (req,res)=>{
    const {key,value} = req.body
    const data = await set(key,value)
    res.send(data)
})
redisRoute.post("/get",async (req,res)=>{
    const {key} = req.body
    const data = await get(key)
    res.send(data)
})

export default redisRoute