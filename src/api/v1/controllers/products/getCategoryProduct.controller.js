import { productService } from "../../services/index.js";
import createError from "http-errors";
import { convertStringToObjectId,convertStringToNumber } from "../../utils/index.js";


export default async function getCategoryProduct(req, res) {
  try {
    let { limit, page, critical, category } = req.query;
    if (!page) {
      page = 1;
    }
    const filter_critical = new Map([
      ["increase", { price: 1 }],
      ["decrease", { price: -1 }],
      ["data", { data: 1 }],
    ]);
    critical = filter_critical.get(critical);
    category = convertStringToObjectId(category);
    let count = await productService.getCount();
    let skip = (page - 1) * limit;
    let firstItem = skip + 1;
    let totalPage;
    let lastItem = skip + convertStringToNumber(limit);
    if (count % convertStringToNumber(limit) == 0) {
      totalPage = Math.floor(count / limit);
    } else {
      totalPage = Math.floor(count / limit) + 1;
    }
    const matchedProduct = { $match: { category } };
    const limitedItem = { $limit: convertStringToNumber(limit) };
    skip = { $skip: skip };
    // skip = { $skip: 1 };
    let sort = { $sort: critical };
    // count = count/limit
    const product = await productService.getCategoryProduct(
      matchedProduct,
      skip,
      limitedItem,
      sort

     
    );
    // console.log({ product });
    return res.json({
      product,
      count,
      firstItem,
      lastItem,
      totalPage,
    });
  } catch (error) {
    console.log(error);
  }
}
