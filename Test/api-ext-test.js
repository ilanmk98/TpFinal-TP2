import { expect } from "chai"
import supertest from "supertest"

const request = supertest('http://127.0.0.1:3000')

describe('test apirestful', () => {
    describe('GET', () => {
        it('debería retornar un status 200', async () => {
            const reponse = await request.get('/obtenerComidas')
            expect(reponse.status).to.eql(200)
        })
    })
})



