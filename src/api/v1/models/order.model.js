import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ObjectId = mongoose.Types.ObjectId;


const orderSchema = new Schema({
    products:Array,
    userId:{
        type:ObjectId,
        ref:'Customer'
    },
    // shipping:Ojbect,
    // payment:Ojbect
})

const Orders = mongoose.model('Orders',orderSchema)
export default Orders