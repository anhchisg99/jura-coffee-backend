import mongoose from 'mongoose'
const Schema = mongoose.Schema
// import mongodb_connection from '../helpers/connection_mongodb.js'
const ObjectId = Schema.Types.ObjectId

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "you forget typing item name ..."],
    },
    shortname: {
        type: String,
    },
    price: Number,
    sku: Number,

    category: {
        type: ObjectId,
        ref: "Category",
    },
    importer: {
        type: ObjectId,
        ref: "Admin",
    },
    image: String,
    relativeImg: String,

    description: String,
    features:Array

})
const Product = mongoose.model('Product', productSchema)


export default Product