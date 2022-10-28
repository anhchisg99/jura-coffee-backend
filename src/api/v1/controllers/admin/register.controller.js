import { Admin } from "../../models/index.js";
import { adminService } from "../../services/index.js";
import createError from "http-errors";
import { userValidation } from "../../validations/validation.js";
import {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} from "../../middlewares/jwt_service.js";

export default async function Register(req, res, next) {
    try {
      const { username, password, role } = req.body;
      const { error } = userValidation(req.body);
      if (error) {
        throw createError(error.details[0].message);
      }
      if (!username || !password) {
        throw createError.BadRequest();
      }
      const isExits = await Admin.findOne({ username });
      if (isExits) {
        throw createError.Conflict(`${username} is ready been registered`);
      }
      const isCreate = await adminService.Register(username, password, role);
      res.json({
        status: "okey",
        elements: isCreate,
      });
    } catch (error) {
      next(error);
    }
  }