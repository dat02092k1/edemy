import Joi from 'joi'

export const PostschemaValidation = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    author: Joi.string().required(),
})

export const UserSchemaValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6).max(15),
    name: Joi.string().required(),
    phone: Joi.string().max(10).min(10)
})