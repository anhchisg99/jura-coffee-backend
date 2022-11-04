import { ListBucketAnalyticsConfigurationsCommand } from "@aws-sdk/client-s3";
import { inventoryService } from "../../services/index.js";
import {convertStringToObjectId,convertStringToNumber} from '../../utils/index.js'
export default async function getInventories(req, res) {
  try {
   
   let {inventoryId,incr} = req.query
   incr = convertStringToNumber(incr)
   inventoryId =convertStringToObjectId(inventoryId)
    let product = await inventoryService.incrInventories(inventoryId,incr)
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error });
  }
}
