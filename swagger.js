import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Tp final TP2',
    description: 'TpFinal'
  },
  host: 'localhost:3000'
};

const outputFile = './swagger-output.json';
const routes = ['./Router/router.js'];



swaggerAutogen()(outputFile, routes, doc);