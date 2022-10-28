import { productService } from "../../services/index.js";

export default async function getPanigation(req, res) {
    try {
      let { limit, page, critical } = req.query;
      if (!page) {
        page = 1;
      }
      const filter_critical = new Map([
        ["increase", { price: 1 }],
        ["decrease", { price: -1 }],
        ["data", { data: 1 }],
      ]);
      critical = filter_critical.get(critical);
  
      let count = await productService.getCount();
      let skip = (page - 1) * limit;
      let firstItem = skip + 1;
      let totalPage;
      let lastItem = skip + Number(limit);
      if (count % Number(limit) == 0) {
        totalPage = Math.floor(count / limit);
      } else {
        totalPage = Math.floor(count / limit) + 1;
      }
      // count = count/limit
      const product = await productService.getPanigation(limit, skip, critical);
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

