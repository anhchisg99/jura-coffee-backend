import { productService } from "../../services/index.js";

export default async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    const {
      name,
      price,
      category,
      sku,
      description,
      image,
      relativeImg,
      review,
    } = req.body;
    const updatedProduct = await productService.updateProduct(id, {
      name,
      price,
      category,
      sku,
      description,
      image,
      relativeImg,
      review,
    });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(401).json({ error: "not found" });
  }
}
