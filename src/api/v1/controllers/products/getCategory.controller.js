import { productService } from "../../services/index.js";

export default async function getCategory(req, res) {
  try {
    // const { id } = req.params;
    const product = await productService.getCategory();
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error });
  }
}
