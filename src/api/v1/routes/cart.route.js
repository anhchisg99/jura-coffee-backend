import express from 'express'
const cartRoute = express.Router()
import { cartController} from '../controllers/index.js'

cartRoute.get('/setItem',cartController.setItem)
cartRoute.get('/getItems',cartController.getItems)
cartRoute.delete('/delItem',cartController.delItem)
cartRoute.post('/incrbyItem',cartController.incrbyItem)
// cartRoute.delete('/delItem',cartController.delItem)


export default cartRoute