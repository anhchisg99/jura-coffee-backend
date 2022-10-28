import {Admin} from '../models/index.js'


const authUser = async (req,res,next)=>{
    const {userId} =req.payload
    console.log(userId)
    const user = await Admin.findById(userId)
    if(!user){
        return res.status(403).json("You need sign in!")

    }
    req.user = user


    next()
}

const authPage = permission =>{
    return (req,res,next) =>{
        const {role} = req.user;
        console.log(role)
        if(!permission.includes(role)){
            return res.status(401).json('You dont have permission')
        }
        next()
    }
}

export { 
    authUser,
    authPage
}