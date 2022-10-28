import { categoryService } from "../../services/index.js";
import {newLocationString} from '../../utils/index.js'

export default async function createCategory(req, res) {
  try {
   
   const {name,description} = req.body
   let image = req.file.location
    image = newLocationString(image)
    const product = await categoryService.createCategory(name,description,image)
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error });
  }
}
 