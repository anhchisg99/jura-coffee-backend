import { Inventory } from "../models/index.js";

export async function postInventory(product) {
  try {
    const { productId, quantity } = product;
    const reservations = [];
    return await Inventory.create({ productId, quantity, reservations });
  } catch (error) {
    console.log(error);
  }
}
export async function getInventory(id) {
  try {
    return await Inventory.findById(id); 
  } catch (error) {
    console.log(error);
  }
}

export async function getInventories() {
    try {
      return await Inventory.find();
    } catch (error) {
      console.log(error);
    }
  }
  export async function delInventory(id) {
    try {
      return await Inventory.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
    }
  }
