// Mengimpor library express dari node_modules
const express = require('express');
const connectDB = require('./config/database');
const pastryRoutes = require('./routes/pastryRoutes'); // Import file route

// Menginisialisasi aplikasi express
const app = express();

// Menentukan port jaringan lokal
const PORT = 3000;

// Middleware bawaan express untuk membaca request body berformat JSON
app.use(express.json());

// Jalankan koneksi database
connectDB();

// Menghubungkan endpoint '/api/pastries' ke routing yang kita buat
app.use('/api/pastries', pastryRoutes);

// Endpoint pengujian (Health check)
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Server Artisan Pastry API berhasil berjalan!'
  });
});

// Menjalankan server agar mendengarkan request pada port yang ditentukan
app.listen(PORT, () => {
  console.log(`Server aktif dan mendengarkan di http://localhost:${PORT}`);
});