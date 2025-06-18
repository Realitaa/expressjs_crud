import express from "express";
import { getSiswaById, getAllSiswa, createSiswa, updateSiswa, deleteSiswa } from "../controllers/siswaController.js";

const siswaRouter = express.Router();

siswaRouter.get("/", getAllSiswa);
siswaRouter.get("/:id", getSiswaById);
siswaRouter.post("/", createSiswa);
siswaRouter.put("/:id", updateSiswa);
siswaRouter.delete("/:id", deleteSiswa);

export default siswaRouter;