# 🎂 Birthday Gift Template - Slider Edition

Template ucapan ulang tahun interaktif berbentuk *slider* (geser) yang dioptimalkan untuk tampilan HP (Mobile-First). Terdiri dari 8 slide kartu cantik dengan animasi *fade*, efek hati berjatuhan (*floating love*), dan pemutar musik bawaan.

---

## ✨ Fitur Utama

- **📱 Responsif & Anti-Zoom:** Tampilan pas di layar HP dan mencegah *zoom in/out* yang tidak disengaja.
- **👉 Swipe / Slide:** Navigasi antar kartu bisa dilakukan dengan mengusap layar (swipe) atau menekan tombol panah.
- **🎬 Animasi Fade:** Setiap kartu muncul dengan efek *fade in* yang halus saat berpindah slide.
- **❤️ Floating Love:** Animasi hati kecil yang berjatuhan dari atas layar secara terus-menerus.
- **🎵 Musik Latar:** Tombol pemutar musik di pojok kanan bawah untuk memutar lagu favorit.
- **🔘 Indikator Titik (Dots):** Penanda posisi slide di bagian bawah layar.
- **🎨 Desain Estetik:** Kombinasi warna *maroon* (merah tua) dan *cream* (krem) dengan tekstur kertas.

---

## 📂 Struktur Folder

Pastikan semua file berada dalam satu folder yang sama:

```text
folder-birthday/
│
├── index.html      # Struktur konten (teks, gambar, audio)
├── style.css       # Tampilan, warna, dan animasi
├── script.js       # Logika slider, musik, dan hati berjatuhan
├── README.md       # Panduan ini
└── lagu.mp3        # (Opsional) File lagu latar Anda

Anda
🛠️ Cara Mengedit Template
1. Mengganti Foto
Buka file index.html dan cari tag <img>. Ganti URL https://placehold.co/... dengan link foto Anda.

Contoh:

html
<!-- Sebelum -->
<img src="https://placehold.co/100x100/eee/999?text=1" alt="">

<!-- Sesudah (menggunakan link internet) -->
<img src="https://link-foto-anda.com/foto1.jpg" alt="">

<!-- Sesudah (menggunakan file lokal di folder yang sama) -->
<img src="foto1.jpg" alt="">
Tips: Untuk hasil terbaik, gunakan foto dengan rasio persegi (1:1) atau sesuaikan dengan ukuran yang ada di CSS.

2. Mengganti Teks & Nama
Buka file index.html dan cari teks yang ingin diubah. Beberapa teks penting yang perlu Anda ganti:

Nama & Tanggal: Cari their name dan 25.10.2024 di Slide 1.

Surat (Slide 6): Ganti isi paragraf di dalam <p class="letter-text">.

Alasan (Slide 3): Ganti teks Your smile, Your Hugs, dll.

Deskripsi (Slide 5): Ganti kata Kind, Funny, Strong.

3. Mengganti Lagu
Buka file index.html, cari tag <audio> di bagian bawah, dan ganti src dengan file lagu Anda.

Langkah:

Siapkan file lagu berformat .mp3.

Letakkan file tersebut di folder yang sama dengan index.html. Misalnya beri nama lagu.mp3.

Ubah kode berikut:

html
<!-- Sebelum -->
<source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">

<!-- Sesudah -->
<source src="lagu.mp3" type="audio/mpeg">
4. Mengganti Warna
Buka file style.css dan cari kode warna berikut untuk mengubah tema:

Warna Maroon (Merah Tua): #6b1d2c atau #7a1e2e

Warna Cream (Krem): #fdfbf7

Warna Pink Pastel (Background): #fff0f5 dan #ffe4e1

Warna Hati: #ff6b81

Gunakan Color Hunt atau Coolors untuk mencari kombinasi warna baru.

🚀 Cara Menjalankan & Hosting
Menjalankan Secara Lokal
Ekstrak folder template.

Buka file index.html menggunakan browser (Chrome, Safari, Firefox, dll).

Catatan: Musik mungkin tidak otomatis berputar karena kebijakan browser modern. Klik tombol musik di pojok kanan bawah untuk memulai.

Hosting Gratis (Online)
Agar bisa dikirim ke pasangan/pacar, Anda perlu meng-upload file ke internet. Beberapa platform gratis yang mudah digunakan:

Netlify Drop (Paling Mudah)

Buka app.netlify.com/drop

Seret (drag & drop) seluruh folder template ke halaman tersebut.

Dapatkan link otomatis yang bisa dibagikan.

Vercel

Buka vercel.com, buat akun gratis.

Import folder template Anda.

GitHub Pages

Upload file ke repository GitHub.

Aktifkan GitHub Pages di menu Settings > Pages.

000webhost atau InfinityFree

Alternatif hosting gratis dengan cPanel.

📝 Catatan Penting
Autoplay Musik: Browser seperti Chrome dan Safari memblokir musik yang berputar otomatis tanpa interaksi pengguna. Pastikan penerima mengklik tombol musik untuk memulai lagu.

Ukuran File: Jika menggunakan file MP3 lokal, usahakan ukurannya di bawah 5MB agar loading cepat.

Link Gambar: Jika menggunakan link dari Google Drive, pastikan link sudah di-set menjadi "Anyone with the link can view" dan gunakan format direct link (bukan link preview).

Kompatibilitas: Template ini diuji pada browser modern (Chrome, Safari, Edge, Firefox). Tidak disarankan untuk Internet Explorer.

💖 Kustomisasi Lanjutan
Menambah Slide Baru
Buka index.html.

Duplikasi salah satu <div class="slide">...</div>.

Letakkan di dalam <div class="slider" id="slider">.

Dots dan logika slider akan otomatis menyesuaikan jumlah slide.

Mengubah Kecepatan Animasi Hati
Buka script.js dan cari baris:

javascript
setInterval(createHeart, 400);
Ubah angka 400 (milidetik) menjadi lebih kecil (misal 200) agar hati lebih cepat muncul, atau lebih besar (misal 1000) agar lebih lambat.

Mengubah Kecepatan Fade
Buka style.css dan cari:

css
transition: all 0.8s ease-out;
Ubah 0.8s menjadi 1.5s untuk transisi yang lebih lambat.

📄 Lisensi
Template ini bebas digunakan untuk keperluan pribadi (hadiah ulang tahun, anniversary, dll). Mohon jangan diperjualbelikan tanpa izin.

👨‍💻 Kredit
Design Inspiration: Template referensi dari Pinterest.

Font: Google Fonts (Great Vibes, Poppins, Playfair Display).

Placeholder Image: placehold.co.

Texture: Transparent Textures.

Dibuat dengan ❤️ untuk orang tersayang.

text

---
