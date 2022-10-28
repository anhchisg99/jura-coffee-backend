import { Category,Product } from "../models/index.js";
export async function getCategory(categoryData){
    try {
        console.log('thanh cong')
        // return await Product.aggregate([{"$match":{'category':'62fa054107a310f8c3ad04b4'}}])
        const product = Product.aggregate([{$match:{'category':'62fa501fa1edc1d91be88761'}}]);
        
        console.log(product)
        return await product
    } catch (error) {
        console.log(error)
}
}

export async function createCategory(name,description,image){
    try {
        return await Category.create({name,description,image})
    } catch (error) {
        console.log(error)
        
    }
}
export async function getCategoryHomePage(){
    try {
        const category = Category.find()
        // console.log(category)
        return await category
    } catch (error) {
        console.log(error)
        
    }
}