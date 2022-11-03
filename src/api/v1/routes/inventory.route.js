import express from 'express'
const inventoryRoute = express.Router()
import {inventoryController} from '../controllers/index.js'
// import {inventoryController} from '../controllers/index.js'

inventoryRoute.get('/',inventoryController.getInventories)
inventoryRoute.get('/:id',inventoryController.getInventory)
inventoryRoute.delete('/:id',inventoryController.delInventory)
inventoryRoute.post('/',inventoryController.postInventory)
inventoryRoute.get('/per-product/:id',inventoryController.getInventoryPerProduct)
// inventoryRoute.post('/',inventoryController.postProduct)


export default inventoryRoute
