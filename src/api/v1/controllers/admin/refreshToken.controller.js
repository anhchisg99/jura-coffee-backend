import { Admin } from "../../models/index.js";
import { adminService } from "../../services/index.js";
import createError from "http-errors";
import { userValidation } from "../../validations/validation.js";
import client from '../../datasources/connection_redis.js'

import {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} from "../../middlewares/jwt_service.js";

export default async function RefreshToken(req, res, next) {
    try {
      const { refreshToken } = req.body;
      if (!refreshToken){
          throw createError.BadRequest();
      } 
      const { userId } = await verifyRefreshToken(refreshToken);
      console.log(`userId::: ${userId}`)
      const accessToken = await signAccessToken(userId);
      const refToken = await signRefreshToken(userId);
      res.json({
  
        accessToken,
        refreshToken: refToken,
      });
    } catch (error) {
        res.status(401).json({err:'not founding'})
    }
  }