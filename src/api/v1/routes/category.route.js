import express from 'express'
const categoryRoute = express.Router()
import {upload_img} from '../utils/index.js'

import { categoryController} from '../controllers/index.js'

categoryRoute.get('/get-category-home-page',categoryController.getCategoryHomePage)
categoryRoute.post('/',upload_img.single("avatar"),categoryController.createCategory)



export default categoryRoute