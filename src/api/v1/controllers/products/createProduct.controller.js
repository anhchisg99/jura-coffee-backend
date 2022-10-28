import { productService } from "../../services/index.js";
import {newLocationString} from '../../utils/index.js'

export default async function createProduct(req, res) {
  try {
    const {
      name,
      price,
      category,
    } = req.body;
    let image = req.file.location
    image = newLocationString(image)
    console.log(image)
    if (!name && !price) {
      return res.stutus(401).json({ error: "not found" });
    }
    const product = await productService.createProduct({ name, price,category,image });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error });
  }
}
