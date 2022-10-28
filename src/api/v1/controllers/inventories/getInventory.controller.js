import { inventoryService } from "../../services/index.js";

export default async function getInventory(req, res) {
  try {
   
   const {id} = req.params
    const product = await inventoryService.getInventory(id)
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error });
  }
}
 