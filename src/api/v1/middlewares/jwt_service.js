import JWT from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import createError from "http-errors";
// import client from "../helpers/connection_redis.js";
import {set,get} from '../services/redis.js'
const signAccessToken = async (userId) => {
  return new Promise((resolve, reject) => {
    const payload = {
      userId,
    };
    const secret = process.env.ACCESS_TOKEN_SECRET;
    const options = {
      expiresIn: "15s",
    };
    JWT.sign(payload, secret, options, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};
const signRefreshToken = async (userId) => {
  return new Promise((resolve, reject) => {
    const payload = {
      userId,
    };
    const secret = process.env.REFRESH_TOKEN_SECRET;
    const options = {
      expiresIn: "1h",
    };
    JWT.sign(payload, secret, options, (err, token) => {
      if (err) reject(err);
        set(
        userId.toString(),
        token,
        {
          EX: 100,
          NX: true,
        },
        (err, reply) => {
          if (err) {
            return reject(createError.InternalServerError());
          }
          resolve(reply);
        }
      );
      resolve(token);
    });
  });
};
const verifyAccessToken = (req, res, next) => {
  if (!req.headers["authorization"]) {
    return next(createError.Unauthorized());
  }
  const authHeader = req.headers["authorization"];
  const bearerToken = authHeader.split(" ");
  const token = bearerToken[1];
  JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
    if (err) {
      if (err.name === "JsonWebTokenError") {
        return next(createError.Unauthorized());
      }
      return next(createError.Unauthorized(err.message));
    }
    req.payload = payload;
    next();
  });
};

const verifyRedis = async (data) => {
  try {
    const iodata =  await get(data);
    // console.log(iodata)
    return iodata

  } catch (error) {
    console.log(error);
  }
};
const verifyRefreshToken = async (refreshToken) => {
  return new Promise((resolve, reject) => {
    JWT.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, payload) => {
        if (err) {
          return reject(err);
        }
        const reply = await verifyRedis(payload.userId);
        if (refreshToken === reply) {
          return resolve(payload);
        } else {
          return reject(err);
        }
        // resolve(payload)
      }
    );
  });
};

export {
  signAccessToken,
  verifyAccessToken,
  signRefreshToken,
  verifyRefreshToken,
};
