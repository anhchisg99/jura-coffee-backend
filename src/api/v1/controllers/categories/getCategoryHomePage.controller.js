import { categoryService } from "../../services/index.js";

export default async function getCategoryHomePage(req, res) {
  try {
    const product = await categoryService.getCategoryHomePage()
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error });
  }
}
 