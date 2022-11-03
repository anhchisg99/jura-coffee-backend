import express from 'express'
const productRoute = express.Router()
import {productController} from '../controllers/index.js'
import {verifyAccessToken} from '../middlewares/jwt_service.js'
import { authPage,authUser } from "../middlewares/basicAuth.js";

import {upload_img} from '../utils/index.js'


productRoute.get('/relate-product',productController.getRelateProduct)
productRoute.get('/category-product',productController.getCategoryProduct)
// productRoute.get('/:id',productController.getProduct)
productRoute.get('/:id',productController.getPerProduct)
// productRoute.post('/',verifyAccessToken,authUser,authPage(['admin']),productController.createProduct)
//test
productRoute.post('/',upload_img.single("avatar"),productController.createProduct)

productRoute.put('/:id',productController.updateProduct)
productRoute.delete('/:id',productController.deleteProduct)
//Home
productRoute.get('/new-release',productController.getNewRealse)
productRoute.get('/home-store',productController.getHomeStore)
// relate product


export default productRoute