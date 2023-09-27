import Joi from 'joi'

export const PostschemaValidation = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    author: Joi.string().required(),
})