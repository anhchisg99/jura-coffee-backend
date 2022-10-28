import express from 'express'
const orderRoute = express.Router()
import {orderController} from '../controllers/index.js'

orderRoute.post('/make-order',orderController.makeOrder)



export default orderRoute