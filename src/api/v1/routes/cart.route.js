import express from 'express'
const cartRoute = express.Router()
import { cartController} from '../controllers/index.js'


/**
 * @swagger
 * /carts/setItem:
 *  get:
 *    summary: setItem for carts
 *    parameters:
 *      - name: key
 *        in: query
 *        description: key for product
 *        required: true
 *        schema:   
 *          type: string
 *      - name: value
 *        in: query
 *        description: value for product
 *        required: true
 *        schema:
 *          type: number
 *    responses: 
 *      '200':
 *        description: setItem for product
 *      '400':
 *        description: this is error !!!
 */
cartRoute.get('/setItem',cartController.setItem)

/**
 * @swagger
 * /carts/getItems:
 *  get:
 *    summary: getItems for carts
 *    responses: 
 *      '200':
 *        description: getItems for product
 *      '400':
 *        description: this is error !!!
 */
cartRoute.get('/getItems',cartController.getItems)

cartRoute.delete('/delItem',cartController.delItem)

/**
 * @swagger
 * /carts/incrbyItem:
 *  get:
 *    summary: incrbyItem for carts
 *    parameters:
 *      - name: productId
 *        in: query
 *        description: productId for product
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
 *        description: incrbyItem for product
 *      '400':
 *        description: this is error !!!
 */
cartRoute.get('/incrbyItem',cartController.incrbyItem)
// cartRoute.delete('/delItem',cartController.delItem)


export default cartRoute