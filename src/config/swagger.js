import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Blog para Professores",
      version: "1.0.0",
      description: "API de posts com autenticação JWT",
    },
    servers: [{ url: "http://localhost:3000" }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./src/routes/*.js"], // onde estão as anotações
};

export const swaggerSpec = swaggerJSDoc(options);
