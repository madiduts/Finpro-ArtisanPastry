# Artisan Pastry Batch REST API

Final Project Study Club Backend Basic oleh Mahdi Imantaka Sutejo.
Aplikasi backend ini mengelola ketersediaan stok pastry menggunakan Node.js, Express, dan MongoDB.

## Cara Menjalankan Aplikasi
1. Pastikan Node.js dan MongoDB lokal sudah berjalan.
2. Jalankan `npm install` untuk mengunduh dependensi.
3. Jalankan `npm run dev` untuk memulai server.
4. Server akan aktif di `http://localhost:3000`.

## Daftar Endpoint API
- `GET /api/pastries` : Mengambil semua data pastry (opsional filter: `?category=Viennoiserie&vegan=true`).
- `POST /api/pastries` : Menambahkan data pastry baru.
- `PUT /api/pastries/:id` : Memperbarui seluruh data pastry berdasarkan ID.
- `PATCH /api/pastries/:id/sell` : Mengurangi stok pastry saat terjadi penjualan.
- `DELETE /api/pastries/:id` : Menghapus data pastry berdasarkan ID.