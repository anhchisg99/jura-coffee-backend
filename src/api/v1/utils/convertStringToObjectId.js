import mongoose from 'mongoose'

export default function convertStringToObjectId(string){
    return mongoose.Types.ObjectId(string)
}