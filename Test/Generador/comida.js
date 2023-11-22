import { faker } from '@faker-js/faker/locale/en'

const get = _ => ({
//   nombre: faker.commerce.product(),
//   precio: faker.number.float({ min: 10, max: 10000, precision: 0.01 }),
//   stock: faker.number.int({ min: 0, max: 900 })
    name: faker.commerce.product(),
    description: faker.commerce.product(),
    price: faker.number.float({min: 10, max:1000}),
    restaurantId: faker.number.int({min: 1, max: 100}),
    quantity: faker.number.int({min: 1, max: 100}),
})

//console.log(get())

export default {
    get
}