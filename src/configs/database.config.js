import dotenv from "dotenv"
dotenv.config()
export default {
    mongodb:{
        host:process.env.MONGO_URI
    },
    mysql:{
        
    }
}