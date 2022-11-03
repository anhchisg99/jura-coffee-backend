import { inventoryService } from "../../services/index.js";

export default async function getInventoryPerProduct(req, res) {
  try {
   
   const {id} = req.params
    const product = await inventoryService.getInventoryPerProduct(id)
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error });
  }
}
 