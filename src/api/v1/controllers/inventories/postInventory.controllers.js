import { inventoryService } from "../../services/index.js";

export default async function postInventory(req, res) {
  try {
    const {
        productId, quantity
    } = req.body;
   
    const product = await inventoryService.postInventory({ productId, quantity});
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error });
  }
}
