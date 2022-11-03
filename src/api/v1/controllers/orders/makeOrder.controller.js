import { orderService } from "../../services/index.js";
import { Inventory } from '../../models/index.js'
import { del } from '../../services/redis.js'
import createError from "http-errors";
import StatusCode from "http-status-codes";

import { convertRedisToArray } from '../../utils/index.js'
import { emailValidation } from '../../validations/validation.js'

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
    let {
      sessionID,
      body: { street, city, email },
    } = req;
    const { error } =  emailValidation({email})

    if (error) {
      throw createError(error.details[0].message)
      
    } else {
      let products = await convertRedisToArray(sessionID);
      let order = await orderService.makeOrder({ 'shipping_address.street': street, 'shipping_address.city': city, products, email, line_items: products });
      await Promise.all([
        update_product(products, sessionID),
        order.save(),
        del(`cart:${sessionID}`),
      ]);
      // return res.send(`success saved in`);
      return res.sendStatus(StatusCode.OK);


    }

  } catch (error) {
    res.status(400).json({ error });
  }
}
