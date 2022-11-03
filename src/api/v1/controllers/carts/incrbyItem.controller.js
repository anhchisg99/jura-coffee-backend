import { cartService } from "../../services/index.js";
import { convertStringToNumber } from "../../utils/index.js";
import {Inventory} from '../../models/index.js'
import {hget} from '../../services/redis.js'
import StatusCode from "http-status-codes";

function isStock(quantity, incr, productInCart) {
  if (quantity - incr - productInCart > 0) {
    return 1;
  }
  return 0;
}
export default async function incrbyItem(req, res) {
  try {
    let {
      sessionID,
      query: { productId, incr },
    } = req;
    let product = `product:${productId}`;
    let cartId = `cart:${sessionID}`;
    let [{ quantity }, productInCart] = await Promise.all([
    await Inventory.findOne({ productId }),
      await hget(cartId, product),
    ]);
    // await Inventory.findOne({ productId:'632988a99dc3ab0aea8e95bf' }),
    //   await hget(cartId, product),
    
    incr = convertStringToNumber(incr);
    productInCart = convertStringToNumber(productInCart);
    if (!isStock(quantity, incr, productInCart)) {
      return res.sendStatus(StatusCode.CONFLICT);
    }
    await cartService.incrbyItem(cartId, product, incr);
    res.sendStatus(StatusCode.OK);

    // res.status(200).json({status:'OK'});
  } catch (error) {
    res.status(400).json({ error });
  }
}
