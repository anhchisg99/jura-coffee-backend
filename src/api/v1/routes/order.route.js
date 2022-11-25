import express from 'express'
const orderRoute = express.Router()
import {orderController} from '../controllers/index.js'


/**
 * @swagger
 * /orders/:
 *  post:
 *    summary: post order
 *    requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      street:
 *                          type: string
 *                          example: vn
 *                      city:
 *                          type: string
 *                          example: tphcm
 *                      email:
 *                          type: string
 *                          format: email
 *                          example: uit@gmail.com
 *    responses: 
 *      '200':
 *        description: post order
 *      '400':
 *        description: this is error !!!
 */
orderRoute.post('/make-order',orderController.makeOrder)



export default orderRoute