🌱 Green Challenge — Backend (Node.js + MySQL)

Proyek ini adalah backend untuk aplikasi Green Challenge, dibuat menggunakan:

Node.js + Express

MySQL

HTML/CSS/JS (frontend sederhana)

Upload file (multer)

Autentikasi JWT (login & register)

Backend ini berjalan lokal di laptop Anda.

📂 Struktur Project
greenchallenge-backend/
│
├── api/
│   ├── config/        # Koneksi database
│   ├── controllers/   # Controller (Auth, User, Challenges, Proofs)
│   ├── middleware/    # authMiddleware
│   ├── repositories/  # Akses database (User, Proof, Challenge)
│   ├── routes/        # Routing API
│   └── services/      # Business logic (SOLID)
│
├── public/            # Frontend HTML, CSS, JS (login, dashboard, upload, forum)
├── uploads/           # Folder tempat file bukti disimpan
├── server.js          # Entry point server
├── package.json
├── .env               # Konfigurasi environment
└── sql_create_tables.sql # Schema database + sample data

🚀 Cara Menjalankan di Laptop
1️⃣ Install Node.js

Download dari:
https://nodejs.org/

2️⃣ Install MySQL

Pastikan MySQL sudah terpasang & berjalan.

Buat database dengan perintah berikut:

CREATE DATABASE green_challenge;
USE green_challenge;


Lalu jalankan file schema:

SOURCE sql_create_tables.sql;

3️⃣ Clone Repository
git clone https://github.com/Hasrullah-Araz/greenchallenge.git
cd greenchallenge-backend

4️⃣ Install Dependencies
npm install

5️⃣ Buat file .env

Buat file .env di folder root:

DB_HOST=localhost
DB_USER=root
DB_PASS=YOURPASSWORD
DB_NAME=green_challenge
JWT_SECRET=super_secret
PORT=3000


Ganti YOURPASSWORD sesuai laptop masing-masing.

6️⃣ Jalankan Server
npm start


Server berjalan di:

http://localhost:3000

🔐 Autentikasi

Login menghasilkan token JWT.
Token digunakan untuk:

Upload bukti

Melihat profil

Contoh header:

Authorization: Bearer <token>

📤 Upload Bukti

Endpoint:

POST /api/proof


Form-data:

proof → file (image)

challenge_id → optional

File akan disimpan di folder /uploads.

🗂 Frontend

Frontend berada di folder:

public/


Buka:

http://localhost:3000/register.html
