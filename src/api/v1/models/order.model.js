import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ObjectId = mongoose.Types.ObjectId;


const orderSchema = new Schema({
    state:String,
    shipping_address:{
        street:String,
        city:String
    },
    email:String,
    line_items:Array,
    userId:{
        type:ObjectId,
        ref:'Customer'
    },
    // shipping:Ojbect,
    // payment:Ojbect
})

const Orders = mongoose.model('Orders',orderSchema)
export default Orders