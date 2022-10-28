import { cartService } from "../../services/index.js";

export default async function delItem(req, res) {
  try {
    const {
        sessionID,
        query: { inventoryId },
      } = req;
      let cartId = `cart:${sessionID}`;
      const key = `product:${inventoryId}`
    const product = await cartService.delItem(cartId,key);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error });
  }
}
