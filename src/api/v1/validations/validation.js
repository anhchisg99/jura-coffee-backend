import Joi from 'joi'

const userValidation = data =>{
    const userSchema = Joi.object({
        username:Joi.string().email().lowercase().required(),
        password:Joi.string().min(4).max(32).required(),
        role:Joi.string()
    })
    return userSchema.validate(data)
}
const emailValidation = data =>{

    const schema = Joi.object().keys({
        email:Joi.string().email().required(),
        
    });
    const result = schema.validate(data)
    return result
}



export {
    userValidation,emailValidation
} 