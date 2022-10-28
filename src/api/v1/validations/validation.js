import Joi from 'joi'

const userValidation = data =>{
    const userSchema = Joi.object({
        username:Joi.string().email().lowercase().required(),
        password:Joi.string().min(4).max(32).required(),
        role:Joi.string()
    })
    return userSchema.validate(data)
}

export {
    userValidation
} 