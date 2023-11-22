import { expect } from "chai"
import supertest from "supertest"

const request = supertest('http://localhost:8080')

describe('test apirestful', () => {
    describe('GET', () => {
        it('debería retornar un status 200', async () => {
            const reponse = await request.get('/obtenerComidas')
            expect(reponse.status).to.eql(200)
        })
    })
})



