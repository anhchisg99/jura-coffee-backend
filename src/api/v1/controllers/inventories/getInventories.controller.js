import { inventoryService } from "../../services/index.js";

export default async function getInventories(req, res) {
  try {
   
   
    const product = await inventoryService.getInventories()
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error });
  }
}
