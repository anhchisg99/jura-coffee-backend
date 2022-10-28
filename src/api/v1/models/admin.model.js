import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const Schema = mongoose.Schema
// import mongodb_connection from '../helpers/connection_mongodb.js'
const ObjectId = Schema.Types.ObjectId

const adminSchema = new Schema({
    name:{
        type:String,
       
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{ 
        enum:['admin','staff'],
        type:String,
        required:true
    }
})
adminSchema.pre('save',async function(next){
    try {
        console.log(`Call before save:::`,this.username,this.password)
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(this.password,salt)
        this.password  = hashPassword
        next()
    } catch (error) {
        next(error)
    }
})
adminSchema.methods.isCheckPassword = async function(password){
    try {
        return await bcrypt.compare(password,this.password);
    } catch (error) {
        console.log(error)
    }
}
const Admin  = mongoose.model('Admin',adminSchema)

export default Admin