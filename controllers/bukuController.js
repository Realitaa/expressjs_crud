import { Buku } from "../models/bukuModel.js";

export const getAllBuku = async (req, res) => {
    try {
        const buku = await Buku.findAll();
        const filteredBuku = buku.map(({ title, author, year }) => ({ title, author, year }));
        res.status(200).json({
            status: "true",
            message: "Data buku retrieved successfully",
            data: filteredBuku
        });
    } catch (error) {
        res.status(500).json({ status: "false", message: "Internal Server Error", error: error.message });
    }
}

export const getBukuById = async (req, res) => {
    const { id } = req.params;
    try {
        const buku = await Buku.findByPk(id);
        if (!buku) {
            return res.status(404).json({ status: "false", message: "Buku not found" });
        }
        res.status(200).json({
            status: "true",
            message: "Data buku retrieved successfully",
            data: {
                title: buku.title,
                author: buku.author,
                year: buku.year
            }
        });
    } catch (error) {
        res.status(500).json({ status: "false", message: "Internal Server Error", error: error.message });
    }
}

export const createBuku = async (req, res) => {
    try {
        const newBuku = await Buku.create(req.body);
        res.status(201).json({
            status: "true",
            message: "Buku created successfully",
            data: newBuku
        });
    } catch (error) {
        res.status(500).json({ status: "false", message: "Internal Server Error", error: error.message });
    }
}

export const updateBuku = async (req, res) => {
    const { id } = req.params;
    try {
        const buku = await Buku.findByPk(id);
        if (!buku) {
            return res.status(404).json({ status: "false", message: "Buku not found" });
        }
        await buku.update(req.body);
        res.status(200).json({
            status: "true",
            message: "Buku updated successfully",
            data: {
                title: buku.title,
                author: buku.author,
                year: buku.year
            }
        });
    } catch (error) {
        res.status(500).json({ status: "false", message: "Internal Server Error", error: error.message });
    }
}

export const deleteBuku = async (req, res) => {
    const { id } = req.params;
    try {
        const buku = await Buku.findByPk(id);
        if (!buku) {
            return res.status(404).json({ status: "false", message: "Buku not found" });
        }
        await buku.destroy();
        res.status(200).json({
            status: "true",
            message: "Buku deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ status: "false", message: "Internal Server Error", error: error.message });
    }
}