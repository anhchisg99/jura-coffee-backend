// import { Inventory } from "../models/index.js";
import {  hset, hget, hmset, hdel, hincrby, hgetall } from "./redis.js";



export async function getItems(key) {
  try {
    return await  hgetall(key);
  } catch (error) {
    console.log(error)
  }
}

export async function delItem(cartId,key) {
    try {
      return await hdel(cartId, key);
    } catch (error) {
      console.log(error)
    }
  }
  export async function incrbyItem(cartId,product,incr) {
    try {
       return await hincrby(cartId, product, incr);
    } catch (error) {
      console.log(error)
    }
  }

  export async function setItem(cartId,product,value) {
    try {
      return await hset(cartId, product, value);
    } catch (error) {
      console.log(error)
    }
  }