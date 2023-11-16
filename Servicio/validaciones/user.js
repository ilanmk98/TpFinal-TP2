import Joi from 'joi'

export const validar = user => {
    const userSchema = Joi.object({
        name: Joi.string().required(),
        pass: Joi.string().alphanum().required(),
        consumer: Joi.boolean().required(),
        contact: Joi.string().required()
    })
    const { error } = userSchema.validate(user)
    if(error) {
        return { result: false, error }
    }
    return { result: true }
}
