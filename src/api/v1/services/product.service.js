import { Product } from "../models/index.js";
import {getInventoryPerProduct} from './inventory.service.js'
export async function createProduct(product) {
  try {
    let {
      name,
      price,
      category,
      image,

    } = product;
    return await Product.create({
      name,
      price,
      category,
      image,

    });
  } catch (error) {
    console.log(error);
  }
}
export async function getProduct() {
  try {
    return await Product.find();
  } catch (error) {
    console.log(error);
  }
}
export async function getPerProduct(productId) {
  try {
    // const quantity = await getInventoryPerProduct(productId)
    return await Product.findById(productId);
  } catch (error) {
    console.log(error);
  }
}

export async function updateProduct(id, update) {
  try {
    return await Product.findByIdAndUpdate(id, update);
  } catch (error) {
    console.log(error);
  }
}
export async function deleteProduct(id) {
  try {
    return await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
}

export async function getNewRelease() {
  try {
    const date = -1;
    return await Product.find().limit(4).sort({ date: date });
  } catch (error) {
    console.log(error);
  }
}
export async function getHomeStore() {
  try {
    const limit = 8;
    const date = -1;
    return await Product.find().limit(limit).sort({ date: date });
  } catch (error) {
    console.log(error);
  }
}

export async function getCount() {
  try {
    return Product.find().count();
  } catch (error) {
    console.log(error);
  }
}
export async function getCategory() {
  try {
    return Product.find().populate("category");
  } catch (error) {
    console.log(error);
  }
}
export async function getPanigation(limit, skip, critical) {
  try {
    return await Product.find().sort(critical).skip(skip).limit(limit).lean();
  } catch (error) {
    console.log(error);
  }
} 

export async function getRelateProduct(category, limit) {
  try {
    // return await Product.aggregate([category, limit]);
    return await Product.aggregate([category, limit]);

  } catch (error) {
    console.log(error);
  }
}

export async function getCategoryProduct(category, limit, sort, skip) {
  try {
    return await Product.aggregate([category, skip, limit, sort])
    // return await Product.aggregate([{
    //     $match:{category:''}
    // }])
  } catch (error) {

  }
}

