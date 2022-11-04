import { inventoryService } from "../../services/index.js";

export default async function getInventories(req, res) {
  try {
   
   const {inventoryId,incr} = req.query
    const product = await inventoryService.incrInventories(inventoryId,incr)
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error });
  }
}
