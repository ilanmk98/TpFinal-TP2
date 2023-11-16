import Joi from 'joi'

export const validar = comida => {
    const comidaSchema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().min(1).required(),
        restaurantId: Joi.string().alphanum().required(),
        quantity: Joi.number().integer().min(0).required()
    })
    const { error } = comidaSchema.validate(comida)
    if(error) {
        return { result: false, error }
    }
    return { result: true }
}
