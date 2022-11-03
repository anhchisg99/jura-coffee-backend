import { cartService } from "../../services/index.js";
import StatusCode from "http-status-codes";
import { Inventory } from '../../models/index.js'
import { hget } from '../../services/redis.js'
import { convertStringToNumber } from "../../utils/index.js";

function isStock(quantity, incr, productInCart) {
  if (quantity - incr - productInCart > 0) {
    return 1;
  }
  return 0;
}
export default async function getProducts(req, res) {
  try {
    let {
      sessionID,
      query: { key, value },
    } = req;
    console.log({ sessionID });
    let cartId = `cart:${sessionID}`;
    let product = `product:${key}`;
    let {quantity} = await Inventory.findOne({ productId:key })
    
  
    if (!quantity) {
      return res.sendStatus(StatusCode.CONFLICT);
    }

    await cartService.setItem(cartId, product, value);
    res.sendStatus(StatusCode.OK);

  } catch (error) {
    res.sendStatus(StatusCode.METHOD_FAILURE);

  }
}
