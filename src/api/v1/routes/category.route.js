import express from 'express'
const categoryRoute = express.Router()
import {upload_img} from '../utils/index.js'

import { categoryController} from '../controllers/index.js'

/**
 * @swagger
 * /categories/get-category-home-page:
 *  get:
 *    summary: get-category-home-page for carts
 *    responses: 
 *      '200':
 *        description: get-category-home-page for product
 *      '400':
 *        description: this is error !!!
 */
categoryRoute.get('/get-category-home-page',categoryController.getCategoryHomePage)

/**
 * @swagger
 * /categories/:
 *  post:
 *    summary: post categories
 *    requestBody:
 *      required: true
 *      content:
 *          multipart/form-data:
 *              schema:
 *                  type: object
 *                  properties:
 *                      name:
 *                          type: string
 *                      description:
 *                          type: string
 *                      avatar:
 *                          type: string
 *                          format: binary               
 *    responses: 
 *      '200':
 *        description: post categories
 *      '400':
 *        description: this is error !!!
 */
categoryRoute.post('/',upload_img.single("avatar"),categoryController.createCategory)



export default categoryRoute