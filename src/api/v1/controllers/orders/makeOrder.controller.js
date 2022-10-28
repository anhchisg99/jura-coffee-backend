import { orderService } from "../../services/index.js";
import {Inventory} from '../../models/index.js'
import {del} from '../../services/redis.js'
import {convertRedisToArray} from '../../utils/index.js'


async function update_product(products, sessionID) {
//   console.log({ products });
  for (let i = 0; i < products.length; i++) {
    await Inventory.updateOne(
      {
        productId: products[i].product,
      },
      {
        $inc: { quantity: -products[i].quantity },
        $push: {
          reservations: {
            sessionID,
            quantity: products[i].quantity,
            productId: products[i].product,
          },
        },
      }
    );
  }
}

export default async function makeOrder(req, res) {
  try {
    const {
      sessionID,
      body: { shipping },
    } = req;
    const products = await convertRedisToArray(sessionID);
    const order = await orderService.makeOrder({shipping,products});
    await Promise.all([
      update_product(products, sessionID),
      order.save(),
      del(`cart:${sessionID}`),
    ]);
    return res.send(`success saved in`);
  } catch (error) {
    res.status(400).json({ error });
  }
}
