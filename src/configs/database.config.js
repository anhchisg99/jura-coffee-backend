import dotenv from "dotenv"
dotenv.config()
export default {
    mongodb:{
        host:process.env.MONGO_URI
    },
    redis:{
        host:process.env.REDIS_URI,
        password:process.env.REDIS_PASSWORD
    }
}