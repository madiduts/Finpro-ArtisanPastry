// models/Pastry.js
const mongoose = require('mongoose');

// Membuat cetakan (skema) berdasarkan PRD
const pastrySchema = new mongoose.Schema({
  sku: {
    type: String,
    required: true, // Wajib diisi
    unique: true    // gaboleh ada batch SKU yang sama
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Viennoiserie', 'Tart', 'Sourdough', 'Choux']
  },
  isVegan: {
    type: Boolean,
    default: false  // Opsional, kalau kosong otomatis diset false
  },
  stockQuantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  bakedAt: {
    type: Date,
    default: Date.now // Kalau kosong, otomatis diisi tanggal sekarang
  }
});

// Mengubah skema menjadi Model siap pakai dan mengekspornya
module.exports = mongoose.model('PastryProduct', pastrySchema);