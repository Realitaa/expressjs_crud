import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: '3.0.0', // Versi OpenAPI
    info: {
      title: 'Express CRUD API', // Nama API Anda
      version: '1.0.0', // Versi API
      description: 'API sederhana untuk mengelola data buku dan siswa',
    },
    servers: [
      {
        url: 'http://localhost:5000/api/v1/', // Ganti dengan URL server Anda
      },
    ],
  },
  apis: ['./routes/*.js'], // Lokasi file yang berisi anotasi Swagger (misalnya, file rute)
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;