import express from 'express'
const inventoryRoute = express.Router()
import {inventoryController} from '../controllers/index.js'
// import {inventoryController} from '../controllers/index.js'

inventoryRoute.get('/',inventoryController.getInventories)
inventoryRoute.get('/:id',inventoryController.getInventory)

/**
 * @swagger
 * /inventories/incr:
 *  put:
 *    summary: incr inventory
 *    parameters:
 *      - name: inventoryId
 *        in: query
 *        description: inventoryId for product
 *        required: true
 *        schema:   
 *          type: string
 *      - name: incr
 *        in: query
 *        description: incr for product
 *        required: true
 *        schema:
 *          type: number
 *    responses: 
 *      '200':
 *        description: incr inventory
 *      '400':
 *        description: this is error !!!
 */
inventoryRoute.put('/incr',inventoryController.incrInventories)

/**
 * @swagger
 * /inventories/{id}:
 *  delete:
 *    summary: delete inventory
 *    parameters:
 *      - name: id
 *        in: path
 *        description: id for product
 *        required: true
 *        schema:   
 *          type: string
 *    responses: 
 *      '200':
 *        description: delete inventory
 *      '400':
 *        description: this is error !!!
 */
inventoryRoute.delete('/:id',inventoryController.delInventory)

/**
 * @swagger
 * /inventories/:
 *  post:
 *    summary: post inventory
 *    requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      productId:
 *                          type: string
 *                      quantity:
 *                          type: number
 *    responses: 
 *      '200':
 *        description: post inventory
 *      '400':
 *        description: this is error !!!
 */
inventoryRoute.post('/',inventoryController.postInventory)
inventoryRoute.get('/per-product/:id',inventoryController.getInventoryPerProduct)
// inventoryRoute.post('/',inventoryController.postProduct)


export default inventoryRoute
