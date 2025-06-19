import express from "express";
import { getAllSiswa, getSiswaById, createSiswa, updateSiswa, deleteSiswa } from "../controllers/siswaController.js";

const siswaRouter = express.Router();

/**
 * @swagger
 * /siswa:
 *   get:
 *     summary: Mendapatkan daftar semua siswa
 *     tags: [Siswa]
 *     responses:
 *       200:
 *         description: Daftar siswa berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   age:
 *                     type: integer
 */
siswaRouter.get("/", getAllSiswa);

/**
 * @swagger
 * /siswa/{id}:
 *   get:
 *     summary: Mendapatkan detail siswa berdasarkan ID
 *     tags: [Siswa]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID siswa
 *     responses:
 *       200:
 *         description: Detail siswa berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 age:
 *                   type: integer
 *       404:
 *         description: Siswa tidak ditemukan
 */
siswaRouter.get("/:id", getSiswaById);

/**
 * @swagger
 * /siswa:
 *   post:
 *     summary: Menambahkan siswa baru
 *     tags: [Siswa]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               age:
 *                 type: integer
 *             required:
 *               - name
 *     responses:
 *       201:
 *         description: Siswa berhasil ditambahkan
 *       400:
 *         description: Data siswa tidak valid
 */
siswaRouter.post("/", createSiswa);

/**
 * @swagger
 * /siswa/{id}:
 *   put:
 *     summary: Memperbarui data siswa berdasarkan ID
 *     tags: [Siswa]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID siswa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               age:
 *                 type: integer
 *             required:
 *               - name
 *     responses:
 *       200:
 *         description: Siswa berhasil diperbarui
 *       400:
 *         description: Data siswa tidak valid
 *       404:
 *         description: Siswa tidak ditemukan
 */
siswaRouter.put("/:id", updateSiswa);

/**
 * @swagger
 * /siswa/{id}:
 *   delete:
 *     summary: Menghapus siswa berdasarkan ID
 *     tags: [Siswa]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID siswa
 *     responses:
 *       200:
 *         description: Siswa berhasil dihapus
 *       404:
 *         description: Siswa tidak ditemukan
 */
siswaRouter.delete("/:id", deleteSiswa);

export default siswaRouter;