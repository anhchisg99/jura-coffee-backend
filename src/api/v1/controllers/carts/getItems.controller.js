import { cartService } from "../../services/index.js";

export default async function getItems(req, res) {
  try {
    const { sessionID } = req;
    let key = `cart:${sessionID}`

    const product = await cartService.getItems(key);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error });
  }
}
