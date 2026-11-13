# Product Requirements Document (PRD)
**Project:** Artisan Pastry Batch REST API
**Author:** Mahdi Imantaka Sutejo
**Context:** Final Project Study Club Backend Basic
**Deadline:** Sabtu, 21 November 2026, 23.59 WIB

---

## 1. Project Overview & Scope
Aplikasi *backend* berbasis REST API untuk mencatat dan mengelola ketersediaan *batch* produk *pastry* artisan di etalase toko.
*   **Tech Stack:** Node.js, ExpressJS, MongoDB.
*   **In-Scope:** 
    * Pembuatan server utama menggunakan asynchronous JavaScript (`async/await`).
    * 4 *endpoint* operasi CRUD.
    * Koneksi permanen ke database MongoDB.
    * Pembagian struktur *folder* secara modular (`config`, `models`, `controllers`, `routes`) beserta file utama `index.js` / `app.js`.
*   **Out-of-Scope:** Pembuatan antarmuka UI (Frontend), sistem autentikasi (Login/Register), dan relasi database antar-koleksi (*multi-collections*).

---

## 2. Data Requirements (Skema Model)
**Entitas Utama:** `PastryProduct`
*(Asumsi Implementasi: Menggunakan Mongoose ODM untuk kemudahan validasi tipe data sesuai materi kelas)*

| Atribut | Tipe Data | Keterangan |
| :--- | :--- | :--- |
| `sku` | String | Wajib. Kode unik *batch* (contoh: "PST-CRS-001") |
| `name` | String | Wajib. Nama *pastry* (contoh: "Almond Butter Croissant") |
| `category` | String | Wajib. Kategori produk (contoh: "Viennoiserie", "Cake", "Tart") |
| `isVegan` | Boolean | Opsional. Penanda apakah produk vegan (default: `false`) |
| `stockQuantity` | Number | Wajib. Jumlah stok fisik (dalam satuan *pieces*) |
| `price` | Number | Wajib. Harga dalam Rupiah |

---

## 3. API Contract (Endpoints & HTTP Status)
Komunikasi *client-server* akan menggunakan format JSON dengan standar HTTP Method dan penanganan Status Code (200, 201, 404, 500) sesuai spesifikasi tugas.

*   **`POST /api/pastries` (Create)**
    *   **Fungsi:** Menyimpan data *pastry* baru ke database.
    *   **Success Response:** `201 Created`
    *   **Error Response:** `500 Internal Server Error`
*   **`GET /api/pastries` (Read)**
    *   **Fungsi:** Menarik daftar semua *pastry* dari database.
    *   **Success Response:** `200 OK`
*   **`PUT /api/pastries/:id` (Update)**
    *   **Fungsi:** Memperbarui data spesifik berdasarkan parameter ID.
    *   **Success Response:** `200 OK`
    *   **Error Response:** `404 Not Found` (jika ID tidak ditemukan) / `500 Internal Server Error`.
*   **`DELETE /api/pastries/:id` (Delete)**
    *   **Fungsi:** Menghapus data *pastry* berdasarkan parameter ID.
    *   **Success Response:** `200 OK`
    *   **Error Response:** `404 Not Found` (jika ID tidak ditemukan).

---

## 4. Acceptance Criteria (Definisi Selesai)
Tugas dinilai tuntas dan siap dikumpulkan apabila memenuhi *checklist* berikut:
- [ ] Logika API menggunakan `async/await`.
- [ ] Kode terbagi rapi dalam folder `config`, `models`, `controllers`, `routes`, dan satu file root `index.js`.
- [ ] Data *pastry* terbukti tersimpan secara permanen di MongoDB.
- [ ] Keempat *endpoint* sukses diuji manual menggunakan **Postman**.
- [ ] Repositori GitHub diset menjadi **Public**.
- [ ] Terdapat file `README.md` yang memuat cara menjalankan aplikasi (misal: `npm start`) dan daftar *endpoint* API.
- [ ] **Deliverables Akhir:** Membuat presentasi PPT (dikumpulkan dalam format PDF dengan format nama `Nama_TemaProjek.pdf`) yang berisi:
    1. Judul Aplikasi & Nama.
    2. Arsitektur Aplikasi.
    3. Link GitHub publik.
    4. Method HTTP yang digunakan.