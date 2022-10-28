
import {Admin } from '../../models/index.js'
// import { adminService } from "../services/index.js";
// import createError from "http-errors";
// import { userValidation } from "../validations/validation.js";
// import client from "../helpers/connection_redis.js";
import {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} from "../../middlewares/jwt_service.js";

export default async function Login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await Admin.findOne({ username });
      if (!user) {
        console.log(`not logging`);
      }
      const isValid = await user.isCheckPassword(password);
      if (!isValid) {
        console.log(`not logging`);
      }
      console.log(user._id);
      const accessToken = await signAccessToken(user._id);
      const refreshToken = await signRefreshToken(user._id);
  
      res.json({
        accessToken,
        refreshToken,
      });
    } catch (error) {
      console.log(`not logging ${error}`);
    }
  }