import express from "express";
import { getBukuById, getAllBuku, createBuku, updateBuku, deleteBuku } from "../controllers/bukuController.js";

const bukuRouter = express.Router();

/**
 * @swagger
 * /buku:
 *   get:
 *     summary: Mendapatkan daftar semua buku
 *     tags: [Buku]
 *     responses:
 *       200:
 *         description: Daftar buku berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   judul:
 *                     type: string
 *                   penulis:
 *                     type: string
 */
bukuRouter.get("/", getAllBuku);

/**
 * @swagger
 * /buku/{id}:
 *   get:
 *     summary: Mendapatkan detail buku berdasarkan ID
 *     tags: [Buku]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID buku
 *     responses:
 *       200:
 *         description: Detail buku berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 judul:
 *                   type: string
 *                 penulis:
 *                   type: string
 *       404:
 *         description: Buku tidak ditemukan
 */ 
bukuRouter.get("/:id", getBukuById);

/**
 * @swagger
 * /buku:
 *   post:
 *     summary: Menambahkan buku baru
 *     tags: [Buku]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               year:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Buku berhasil ditambahkan
 *       400:
 *         description: Data buku tidak valid
 */ 
bukuRouter.post("/", createBuku);

/**
 * @swagger
 * /buku/{id}:
 *   put:
 *     summary: Memperbarui data buku berdasarkan ID
 *     tags: [Buku]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID buku
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               year:       
 *                 type: integer
 *     responses:
 *       200:
 *         description: Buku berhasil diperbarui
 *       400:
 *         description: Data buku tidak valid
 *       404:
 *         description: Buku tidak ditemukan
 */ 
bukuRouter.put("/:id", updateBuku);

/**
 * @swagger
 * /buku/{id}:
 *   delete:
 *     summary: Menghapus buku berdasarkan ID
 *     tags: [Buku]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID buku
 *     responses:
 *       200:
 *         description: Buku berhasil dihapus
 *       404:
 *         description: Buku tidak ditemukan
 */ 
bukuRouter.delete("/:id", deleteBuku);

export default bukuRouter;