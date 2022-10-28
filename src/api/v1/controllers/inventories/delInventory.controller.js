import { inventoryService } from "../../services/index.js";

export default async function delInventory(req, res) {
  try {
   
   const {id} = req.params
    const product = await inventoryService.delInventory(id)
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error });
  }
}
 