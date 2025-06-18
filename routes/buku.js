import express from "express";
import { getBukuById, getAllBuku, createBuku, updateBuku, deleteBuku } from "../controllers/bukuController.js";

const bukuRouter = express.Router();

bukuRouter.get("/", getAllBuku);
bukuRouter.get("/:id", getBukuById);
bukuRouter.post("/", createBuku);
bukuRouter.put("/:id", updateBuku);
bukuRouter.delete("/:id", deleteBuku);

export default bukuRouter;