import express from "express";
import siswaRoutes from "./siswa.js";
import bukuRouter from "./buku.js";

const router = express.Router();

router.use("/siswa", siswaRoutes);
router.use("/buku", bukuRouter)

export default router;