import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Blog para Professores",
      version: "1.0.0",
      description: "Documentação da API de posts para professores"
    },
    servers: [
      {
        url: "http://localhost:3000",
        url: "https://fiap-fsdt-techchallenge-ii-posts.onrender.com"
      }
    ]
  },
  apis: ["./src/routes/*.js"], // onde estão as anotações
};

export const swaggerSpec = swaggerJSDoc(options);
