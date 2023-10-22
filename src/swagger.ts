import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "v1.0.0",
    title: "Swagger News API Project",
    description: "Implementation of Swagger with TypeScript",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "",
    },
  ],
  definitions: {
    NewsPost: {
      title: "Penguin Chick Hatches at Antarctica Research Station",
      text: "In the icy wilderness of Antarctica, a penguin chick has hatched at our research station.",
    },
  },
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./app.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
