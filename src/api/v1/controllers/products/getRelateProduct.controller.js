import { productService } from "../../services/index.js";
import createError from "http-errors";
import {convertStringToObjectId} from '../../utils/index.js'

export default async function getRelateProduct(req, res, next) {
    try {
        let { category, limit } = req.query;
        
        if (!category && !limit) {
          return next(createError(401, "Please type category and limit"));
        }
        category = convertStringToObjectId(category)
        const matchedProduct = { $match: { category } };
        const limitedItem = { $limit: Number(limit) };
        const product = await productService.getRelateProduct(matchedProduct, limitedItem);
        return res.json(product);
      } catch (error) {
        console.log(error);
      }
}
