import mongoose from 'mongoose'
const Schema = mongoose.Schema

const categorySchema = Schema({
    name: String,
    description: String,
    image:String,
})

const Category = mongoose.model('Category', categorySchema)

export default Category

