// src/config/swagger.ts
import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Little Age Playway School Management API',
      version: '1.0.0',
      description: 'API documentation for school management system',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Local server',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // path to files with OpenAPI annotations
};

export const swaggerSpec = swaggerJsdoc(options);
