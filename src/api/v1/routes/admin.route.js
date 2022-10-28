import express from 'express'
const adminRoute = express.Router()
import {adminController} from '../controllers/index.js'

adminRoute.get('/',(req,res)=>{
    res.send('admin success')

})
adminRoute.post('/login',adminController.login)
adminRoute.post('/register',adminController.register)
adminRoute.post('/refresh-token',adminController.refreshToken)
adminRoute.post('/logout',adminController.logout)

export default adminRoute