// config/database.js
const mongoose = require('mongoose');

// Alamat database lokal lu. 'artisan_pastry_db' itu nama database-nya (bebas diganti)
const dbURI = 'mongodb://localhost:27017/artisan_pastry_db';

const connectDB = async () => {
  try {
    // Mencoba terhubung ke MongoDB
    await mongoose.connect(dbURI);
    console.log('Berhasil terhubung ke MongoDB');
  } catch (error) {
    console.error('Gagal terhubung ke MongoDB:', error.message);
    process.exit(1); // Kalau gagal connect, langsung matikan aplikasi biar nggak error berkelanjutan
  }
};

module.exports = connectDB; // Ekspor fungsi biar bisa dipanggil di index.js