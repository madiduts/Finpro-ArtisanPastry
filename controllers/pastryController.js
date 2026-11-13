// controllers/pastryController.js
const Pastry = require('../models/Pastry');

// GET: Menarik daftar semua pastry
exports.getAllPastries = async (req, res) => {
  try {
    const filter = {};
    if (req.query.category) filter.category = req.query.category;
    if (req.query.vegan) filter.isVegan = req.query.vegan === 'true';
    const pastries = await Pastry.find(filter);
    res.status(200).json(pastries);
  } catch (error) {
    res.status(500).json({ message: "Gagal mengambil data", error });
  }
};

// POST: Menyimpan data pastry baru
exports.createPastry = async (req, res) => {
  try {
    // req.body adalah data JSON yang lu kirim dari Postman
    const newPastry = new Pastry(req.body);
    const savedPastry = await newPastry.save();
    res.status(201).json(savedPastry);
  } catch (error) {
    res.status(500).json({ message: "Gagal menyimpan data", error });
  }
};

// PUT/PATCH: Memperbarui data pastry berdasarkan ID
exports.updatePastry = async (req, res) => {
  try {
    const updatedPastry = await Pastry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // Validasi enum tetap dicek saat update
    );
    if (!updatedPastry) return res.status(404).json({ message: "Data tidak ditemukan" });
    res.status(200).json(updatedPastry);
  } catch (error) {
    res.status(500).json({ message: "Gagal memperbarui data", error });
  }
};

// DELETE: Menghapus data pastry berdasarkan ID
exports.deletePastry = async (req, res) => {
  try {
    const deletedPastry = await Pastry.findByIdAndDelete(req.params.id);
    if (!deletedPastry) return res.status(404).json({ message: "Data tidak ditemukan" });
    res.status(200).json({ message: "Data pastry berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: "Gagal menghapus data", error });
  }
};

// PATCH: Menjual pastry (mengurangi stok batch)
exports.sellPastry = async (req, res) => {
  try {
    const qty = Number(req.body.quantity) || 1;
    const pastry = await Pastry.findById(req.params.id);
    if (!pastry) return res.status(404).json({ message: "Data tidak ditemukan" });
    if (pastry.stockQuantity < qty) {
      return res.status(400).json({ message: "Stok tidak mencukupi!" });
    }
    pastry.stockQuantity -= qty;
    await pastry.save();
    res.status(200).json({ message: `Berhasil terjual ${qty} pcs`, pastry });
  } catch (error) {
    res.status(500).json({ message: "Gagal memproses penjualan", error });
  }
};