# ExpressJS CRUD Application

This is a simple CRUD application built using ExpressJS and MySQL, designed to manage data for `siswa` (students) and `buku` (books). The application uses Sequelize as an ORM for database interactions. This repository is part of my assignment in [NextSkill Indonesia](https://nextskill.id/) Mini Bootcamp. Make sure you have installed MySQL on your computer.

## Table of Contents

1. [Introduction](#expressjs-crud-application)
2. [Features](#features)
    - [Siswa Management](#siswa-management)
    - [Buku Management](#buku-management)
3. [Key Files](#key-files)
4. [Installation](#installation)
5. [API Documentation](#api-documentation)
6. [API Testing](#api-testing)
7. [Dependencies](#dependencies)

## Features

- **Siswa Management**:
  - Create, Read, Update, and Delete operations for students.
  - Endpoints:
    - `GET /api/v1/siswa` - Retrieve all students.
    - `GET /api/v1/siswa/:id` - Retrieve a student by ID.
    - `POST /api/v1/siswa` - Create a new student.
    - `PUT /api/v1/siswa/:id` - Update a student by ID.
    - `DELETE /api/v1/siswa/:id` - Delete a student by ID.

- **Buku Management**:
  - Create, Read, Update, and Delete operations for books.
  - Endpoints:
    - `GET /api/v1/buku` - Retrieve all books.
    - `GET /api/v1/buku/:id` - Retrieve a book by ID.
    - `POST /api/v1/buku` - Create a new book.
    - `PUT /api/v1/buku/:id` - Update a book by ID.
    - `DELETE /api/v1/buku/:id` - Delete a book by ID.

### Key Files

- **`app.js`**: Entry point of the application.
- **`config/database.js`**: Database configuration using Sequelize.
- **`controllers/`**: Contains logic for handling API requests.
- **`models/`**: Defines Sequelize models for `siswa` and `buku`.
- **`routes/`**: Defines API routes for `siswa` and `buku`.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Realitaa/expressjs_crud
   cd expressjs_crud
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy .env.example to .env and configure environment variables based on your environtment. Example:
   ```bash
    DB_HOST=localhost
    DB_PORT=3306
    DB_USER=root
    DB_PASS=
    DB_NAME=nextskill
    PORT=5000
   ```
4. Start your Web Server (e.g. XAMPP or Laragon) then Start the Server and MySQL.
5. Open localhost/phpmyadmin in your browser.
6. Click Import
7. Choose file in the backup/nextskill.sql to import
6. Start the server:
   ```bash
    npm start
   ```

## API Documentation

API Documentation is available on `/api-docs/` endpoint. You can access it in your browser after running `npm start`.

## API Testing

API testing is available in the test/Insomnia_2025-06-18.yaml file, which can be imported into Insomnia or other API testing tools.

## Dependencies

- Express: Web framework for Node.js.
- Sequelize: ORM for database interactions.
- MySQL2: MySQL driver for Node.js.
- dotenv: For managing environment variables.

*AI Generated file by Visual Studio Code Copilot Extension with GPT-4o model with modification*