const swaggerJsDocs = require('swagger-jsdoc');


const options = {
    swaggerDefinition: {
        info: {
            title: 'Sistema ventas API',
            version: '1.0.0',
            description: 'Documentacion API',
            contact: {
                name: 'Cesar Guerrero',
                email: 'mcasr2014@gmail.com'
            },
            servers: {
                url: 'http://localhost:3000',
                description: 'Developer Server'
            }
        },
    },
    basePath: '/',
    apis: ['./src/routes/*.ts']
};

const swaggerDocs = swaggerJsDocs(options);
export default swaggerDocs;