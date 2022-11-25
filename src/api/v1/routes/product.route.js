import express from 'express'
const productRoute = express.Router()
import {productController} from '../controllers/index.js'
import {verifyAccessToken} from '../middlewares/jwt_service.js'
import { authPage,authUser } from "../middlewares/basicAuth.js";

import {upload_img} from '../utils/index.js'

/**
 * @swagger
 * /products:
 *  get:
 *    summary: get relate-product
 *    parameters:
 *      - name: category
 *        in: query
 *        description: category for product
 *        required: true
 *        schema:   
 *          type: string
 *      - name: limit
 *        in: query
 *        description: limit for product
 *        required: true
 *        schema:
 *          type: number
 *    responses: 
 *      '200':
 *        description: get relate-product
 *      '400':
 *        description: this is error !!!
 */
productRoute.get('/relate-product',productController.getRelateProduct)

productRoute.get('/category-product',productController.getCategoryProduct)

// productRoute.get('/:id',productController.getProduct)
/**
 * @swagger
 * /products/{id}:
 *  get:
 *    summary: get per-product
 *    parameters:
 *      - name: id
 *        in: path
 *        description: id for product
 *        required: true
 *        schema:   
 *          type: string
 *    responses: 
 *      '200':
 *        description: get per-product
 *      '400':
 *        description: this is error !!!
 */
productRoute.get('/:id',productController.getPerProduct)
// productRoute.post('/',verifyAccessToken,authUser,authPage(['admin']),productController.createProduct)


/**
 * @swagger
 * /products/:
 *  post:
 *    summary: create products
 *    requestBody:
 *      required: true
 *      content:
 *          multipart/form-data:
 *              schema:
 *                  type: object
 *                  properties:
 *                      name:
 *                          type: string
 *                      price:
 *                          type: number
 *                      category:
 *                          type: string
 *                      avatar:
 *                          type: string
 *                          format: binary               
 *    responses: 
 *      '200':
 *        description: create products
 *      '400':
 *        description: this is error !!!
 */
productRoute.post('/',upload_img.single("avatar"),productController.createProduct)

productRoute.put('/:id',productController.updateProduct)
productRoute.delete('/:id',productController.deleteProduct)
//Home
productRoute.get('/new-release',productController.getNewRealse)
productRoute.get('/home-store',productController.getHomeStore)
// relate product


export default productRoute