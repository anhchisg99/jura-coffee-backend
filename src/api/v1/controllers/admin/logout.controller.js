import { Admin } from "../../models/index.js";
// import {adminService} from '../../services/index.js'
import createError from "http-errors";
import { userValidation } from "../../validations/validation.js";
// import client from "../../helpers/connection_redis.js";
import client from '../../datasources/connection_redis.js'
import {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} from "../../middlewares/jwt_service.js";

export default async function LogOut(req, res, next) {
    try {
      const { refreshToken } = req.body;
      if (!refreshToken) {
        throw createError.BadRequest();
      }
      const {userId} = await verifyRefreshToken(refreshToken);
  
      console.log(`logout data ${userId}`)
      await client.del(userId.toString())
      res.json({message:'Logout !!!'})
   
    } catch (error) {}
  }
