import { cartService } from "../../services/index.js";
import StatusCode from "http-status-codes";

export default async function getProducts(req, res) {
  try {
    const {
      sessionID,
      query: { key, value },
    } = req;
    console.log({ sessionID });
    const cartId = `cart:${sessionID}`;
    const product = `product:${key}`;
    console.log({ cartId, value, key });


    await cartService.setItem(cartId, product, value);
    res.sendStatus(StatusCode.OK);

  } catch (error) {
    res.sendStatus(StatusCode.METHOD_FAILURE);

  }
}
