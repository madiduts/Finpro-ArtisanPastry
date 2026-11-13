# Functional Requirements Document (FRD)

**Project:** Artisan Pastry Batch REST API
**Author:** Mahdi Imantaka Sutejo
**Document Status:** Final

---

## 1. System Overview
Sistem ini merupakan aplikasi *backend* mandiri (*standalone server*) yang berjalan di lingkungan Node.js. 
*   **Arsitektur:** Client-Server. Server akan menerima HTTP Request dari *client* (Postman), memproses data, dan merespons kembali dalam format JSON.
*   **Tech Stack:** Node.js, ExpressJS (sebagai *web framework*), MongoDB (sebagai database utama).
*   **Proses Utama:** Mengelola operasi Create, Read, Update, Delete (CRUD) untuk ketersediaan *batch* produk *pastry*.

---

## 2. API Functional Specifications
Ini adalah kontrak teknis fungsi utama yang harus diimplementasikan pada file di dalam folder `routes/` dan `controllers/`.

### 2.1. Create Pastry (Menambah Produk)
*   **Endpoint:** `/api/pastries`
*   **HTTP Method:** `POST`
*   **Request Body (JSON):** Membutuhkan `sku`, `name`, `category`, `stockQuantity`, `price`. Parameter `isVegan` opsional.
*   **Processing Logic:** Server menerima data, memvalidasi tipe datanya, dan menyimpannya secara *asynchronous* ke MongoDB.
*   **Success Response:** Status `201 Created`. Mengembalikan data *pastry* yang berhasil disimpan beserta ID dari database.

### 2.2. Get All Pastries (Menampilkan Semua Produk)
*   **Endpoint:** `/api/pastries`
*   **HTTP Method:** `GET`
*   **Processing Logic:** Server melakukan *query* ke MongoDB untuk menarik seluruh dokumen pada koleksi *pastry*.
*   **Success Response:** Status `200 OK`. Mengembalikan *array of objects* berisi daftar *pastry*.

### 2.3. Update Pastry (Memperbarui Data Produk)
*   **Endpoint:** `/api/pastries/:id`
*   **HTTP Method:** `PUT` (atau `PATCH`)
*   **Request Parameters:** `id` (MongoDB ObjectId dari URL).
*   **Request Body:** Data *pastry* yang ingin diubah (contoh: pembaruan `price` atau `stockQuantity`).
*   **Processing Logic:** Server mencari data berdasarkan ID. Jika ditemukan, data ditimpa/diperbarui di database.
*   **Success Response:** Status `200 OK`. Mengembalikan data *pastry* yang sudah diubah.

### 2.4. Delete Pastry (Menghapus Produk)
*   **Endpoint:** `/api/pastries/:id`
*   **HTTP Method:** `DELETE`
*   **Request Parameters:** `id` (MongoDB ObjectId dari URL).
*   **Processing Logic:** Server mencari data berdasarkan ID. Jika ada, hapus dari database.
*   **Success Response:** Status `200 OK`. Mengembalikan pesan konfirmasi penghapusan.

---

## 3. Error & Exception Handling
Sistem harus menangani skenario kegagalan secara spesifik agar *client* memahami sumber masalahnya:
*   **Resource Not Found (404):** Jika *client* mencoba melakukan `PUT` atau `DELETE` pada `:id` yang tidak terdaftar di database, kembalikan HTTP Status Code `404 Not Found` dengan pesan `"Data tidak ditemukan"`.
*   **Server/Database Error (500):** Jika terjadi kegagalan koneksi ke MongoDB atau *syntax error* pada saat proses asinkron (`async/await`), tangkap error tersebut menggunakan `try...catch` dan kembalikan HTTP Status Code `500 Internal Server Error`.

---

## 4. Acceptance Criteria & Test Scenarios
Implementasi fungsi API dianggap valid jika melewati skenario pengujian di Postman berikut:
1.  **Positive Scenario:** Mengirim `POST` dengan JSON lengkap berhasil mengembalikan status `201`.
2.  **Positive Scenario:** Mengirim `GET` berhasil mengembalikan status `200` dan menampilkan data yang baru saja di-POST.
3.  **Negative Scenario:** Mengirim `PUT` menggunakan ID yang asal/salah akan menghasilkan status `404`.
4.  **Negative Scenario:** Jika server dipaksa putus koneksi dari database, request apa pun akan di-handle dengan rapi dan merespons `500` tanpa membuat aplikasi (*server*) mati mendadak (*crash*).