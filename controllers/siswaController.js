import {Siswa} from "../models/siswaModel.js";

export const getAllSiswa = async (req, res) => {
    try {
        const siswa = await Siswa.findAll();
        res.status(200).json({
            status: "true",
            message: "Data siswa retrieved successfully",
            data: siswa
        });
    } catch (error) {
        res.status(500).json({ status: "false", message: "Internal Server Error", error: error.message });
    }
}

export const getSiswaById = async (req, res) => {
    const { id } = req.params;
    try {
        const siswa = await Siswa.findByPk(id);
        if (!siswa) {
            return res.status(404).json({ status: "false", message: "Siswa not found" });
        }
        res.status(200).json({
            status: "true",
            message: "Data siswa retrieved successfully",
            data: siswa
        });
    } catch (error) {
        res.status(500).json({ status: "false", message: "Internal Server Error", error: error.message });
    }
}

export const createSiswa = async (req, res) => {
    try {
        const newSiswa = await Siswa.create( req.body);
        res.status(201).json({
            status: "true",
            message: "Siswa created successfully",
            data: newSiswa
        });
    } catch (error) {
        res.status(500).json({ status: "false", message: "Internal Server Error", error: error.message });
    }
}

export const updateSiswa = async (req, res) => {
    const { id } = req.params;
    try {
        const siswa = await Siswa.findByPk(id);
        if (!siswa) {
            return res.status(404).json({ status: "false", message: "Siswa not found" });
        }
        await siswa.update(req.body);
        res.status(200).json({
            status: "true",
            message: "Siswa updated successfully",
            data: siswa
        });
    } catch (error) {
        res.status(500).json({ status: "false", message: "Internal Server Error", error: error.message });
    }
}

export const deleteSiswa = async (req, res) => {
    const { id } = req.params;
    try {
        const siswa = await Siswa.findByPk(id);
        if (!siswa) {
            return res.status(404).json({ status: "false", message: "Siswa not found" });
        }
        await siswa.destroy();
        res.status(200).json({
            status: "true",
            message: "Siswa deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ status: "false", message: "Internal Server Error", error: error.message });
    }
}