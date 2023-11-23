import { expect } from "chai"
import supertest from "supertest"
import generador from './Generador/comida.js'


const request = supertest('http://127.0.0.1:3000')

describe('test apirestful', () => {
    describe('GET', () => {
        it('debería retornar un status 200', async () => {
            const reponse = await request.get('/obtenerComidas')
            expect(reponse.status).to.eql(200)
        })
    })
})

describe('POST',()=>{
    it('Deberia guardar una comida',async()=>{
        let comida = generador.get()
        comida.restaurantId='654ac2918280094b380b3700' 
        const response = await request.post('/guardarComida').send(comida)
        
        expect(response.status).to.eql(200)
    })
})

describe('POST',()=>{
    it('Deberia lanzar un 400',async()=>{
        let comida = generador.get()
        comida.name='';
        const response = await request.post('/guardarComida').send(comida)
        expect(response.status).to.eql(400)
    })
})

describe('POST',()=>{
    it('Deberia lanzar un 200 y traer comida con sus atributos',async()=>{
        const user = {};
        user.id="654d55a5080a4d40912a6288";
        const response = await request.post('/obtenerComidaUsuario').send(user)
        expect(response.status).to.eql(200)
        expect(response.body.comidas[0]).to.include.keys('name','description','price','quantity','restaurantId')
    })
})

describe('POST',()=>{
    it('Lanzar 400 por usuario inexistente',async()=>{
        const user = {};
        user.id="12345";
        const response = await request.post('/obtenerComidaUsuario').send(user)
        expect(response.status).to.eql(400)
    })
})







