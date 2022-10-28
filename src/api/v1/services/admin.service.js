import { Admin } from "../models/index.js";
export async function Register(username,password,role){
    try {
        return await Admin.create({username:username,password:password,role:role})
    } catch (error) {
        console.log(error)
    }
}

