import { productService } from "../../services/index.js";

export default async function getNewRelease(req, res) {
  try {
    // const { id } = req.params;
    const product = await productService.getNewRelease(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error });
  }
}
