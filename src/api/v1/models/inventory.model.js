import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ObjectId = mongoose.Types.ObjectId;


const inventorySchema = new Schema({
    productId:{
        type:ObjectId,
        ref:'Item'
    },
    quantity:Number,
    reservations:Array,
    create_at:{type:Date, default:Date.now}
},{
    collection:'inventories',
    timestamps:true
})

const Inventory = mongoose.model('Inventory',inventorySchema)
export default Inventory