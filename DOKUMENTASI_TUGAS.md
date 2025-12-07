# Dokumentasi Tugas Project - Web Portfolio CV
## Haikal Saputra Mamonto

---

## ✅ Checklist Syarat Tugas

### 1. Basic Tag HTML & Format Teks ✅
- **Lokasi**: Seluruh file `index.html`
- **Contoh**: 
  - Tag heading: `<h1>`, `<h2>`, `<h3>`
  - Tag paragraf: `<p>`
  - Tag teks formatting: `<strong>`, `<em>`, `<span>`
  - Tag list: `<ul>`, `<li>`
  - Tag lainnya: `<header>`, `<section>`, `<footer>`, dll

### 2. Menyisipkan Gambar, Suara, dan Video ✅

#### Gambar (Images)
- **Lokasi**: 
  - Hero section: `images/profile/profile-photo.jpg`
  - About section: `images/profile/about-photo.jpg`
  - Portfolio section: `images/projects/project-*.jpg`
  - Gallery section: `images/gallery/gallery-*.jpg`
- **Tag HTML**: `<img src="..." alt="...">`

#### Audio (Suara)
- **Lokasi**: Section About - Media Section
- **Tag HTML**: 
  ```html
  <audio id="intro-audio" controls>
      <source src="media/introduction.mp3" type="audio/mpeg">
      <source src="media/introduction.ogg" type="audio/ogg">
  </audio>
  ```
- **File**: `media/introduction.mp3` dan `media/introduction.ogg`

#### Video
- **Lokasi**: Section About - Media Section
- **Tag HTML**: 
  ```html
  <video id="intro-video" controls poster="images/profile/about-photo.jpg">
      <source src="media/introduction.mp4" type="video/mp4">
      <source src="media/introduction.webm" type="video/webm">
  </video>
  ```
- **File**: `media/introduction.mp4` dan `media/introduction.webm`

### 3. Hyperlink & Navigasi ✅
- **Lokasi**: 
  - Navigation bar (navbar) dengan smooth scroll
  - Link ke section: `#home`, `#about`, `#skills`, `#portfolio`, `#gallery`, `#contact`
  - Link email: `mailto:haikalsmamonto2004@gmail.com`
  - Link telepon: `tel:+6289668582350`
  - Link portfolio: `projects/project-*.html`
  - Social media links: LinkedIn, GitHub, Instagram
- **Fitur**: Smooth scrolling, active link highlighting, mobile menu

### 4. Table ✅
- **Lokasi**: Section About - Table Section
- **Tag HTML**: 
  ```html
  <table class="info-table">
      <thead>
          <tr>
              <th>Tahun</th>
              <th>Pendidikan/Pengalaman</th>
              <th>Institusi/Organisasi</th>
              <th>Keterangan</th>
          </tr>
      </thead>
      <tbody>
          <!-- Data riwayat pendidikan & pengalaman -->
      </tbody>
  </table>
  ```
- **Konten**: Menampilkan riwayat pendidikan dan pengalaman dalam format tabel

### 5. Form ✅
- **Lokasi**: Section Contact
- **Tag HTML**: 
  ```html
  <form class="contact-form" id="contact-form">
      <input type="text" id="name" name="name" placeholder="Nama Anda" required>
      <input type="email" id="email" name="email" placeholder="Email Anda" required>
      <input type="text" id="subject" name="subject" placeholder="Subjek" required>
      <textarea id="message" name="message" rows="5" placeholder="Pesan Anda" required></textarea>
      <button type="submit" class="btn btn-primary">Kirim Pesan</button>
  </form>
  ```
- **Fitur**: Validasi form dengan JavaScript, styling modern

### 6. CSS (Cascading Style Sheet) ✅
- **File**: `css/style.css`
- **Fitur**:
  - CSS Variables untuk theming
  - Dark mode & Light mode support
  - Responsive design (mobile, tablet, desktop)
  - Animations & transitions
  - Grid & Flexbox layouts
  - Modern styling dengan gradients, shadows, dll

### 7. Division (DIV) & Layout ✅
- **Lokasi**: Seluruh website menggunakan `<div>` untuk layout
- **Struktur**:
  - Container divs untuk section
  - Grid layouts untuk portfolio, gallery, skills
  - Flexbox untuk navigation, buttons, dll
  - Responsive grid system

### 8. JavaScript ✅
- **File**: `js/script.js`
- **Fitur**:
  - Theme toggle (dark/light mode)
  - Navigation scroll effects
  - Mobile menu toggle
  - Smooth scrolling
  - Skill bars animation
  - Portfolio items animation
  - Gallery lightbox
  - Contact form validation
  - Scroll animations
  - Intersection Observer API

---

## 📁 Struktur File

```
Haikal Saputra Mamonto/
│
├── index.html              # File HTML utama dengan semua elemen
├── css/
│   └── style.css          # File CSS dengan styling lengkap
├── js/
│   └── script.js          # File JavaScript untuk interaktivitas
├── images/
│   ├── profile/           # Foto profil
│   ├── projects/          # Screenshot proyek
│   └── gallery/           # Foto gallery
├── media/                 # Folder untuk audio & video
│   ├── introduction.mp3  # File audio (perlu ditambahkan)
│   ├── introduction.ogg  # File audio alternatif (opsional)
│   ├── introduction.mp4  # File video (perlu ditambahkan)
│   ├── introduction.webm # File video alternatif (opsional)
│   └── README.md          # Instruksi untuk file media
├── projects/              # Halaman detail proyek
├── DOKUMENTASI_TUGAS.md   # File dokumentasi ini
└── README.md              # Dokumentasi umum proyek
```

---

## 🎯 Fitur Website

1. **Responsive Design**: Website dapat diakses dengan baik di desktop, tablet, dan mobile
2. **Dark/Light Mode**: Toggle theme untuk pengalaman pengguna yang lebih baik
3. **Smooth Animations**: Animasi yang halus untuk meningkatkan UX
4. **Interactive Elements**: 
   - Gallery lightbox
   - Form validation
   - Skill bars animation
   - Scroll effects
5. **Modern UI/UX**: Desain modern dengan gradient, glassmorphism, dan efek visual menarik

---

## 📝 Catatan Penting

1. **File Audio & Video**: 
   - File audio dan video perlu ditambahkan ke folder `media/`
   - Lihat `media/README.md` untuk instruksi detail
   - Elemen HTML audio dan video sudah ada di `index.html`

2. **Hyperlink**: 
   - Semua hyperlink sudah berfungsi dengan baik
   - Navigation menggunakan smooth scroll
   - Link eksternal (social media) dapat diupdate dengan URL yang sesuai

3. **Table**: 
   - Table menampilkan data riwayat pendidikan dan pengalaman
   - Data dapat diupdate sesuai kebutuhan
   - Styling responsive untuk mobile

4. **Form**: 
   - Form contact sudah memiliki validasi
   - Untuk mengirim data ke server, perlu menambahkan backend API

---

## ✅ Semua Syarat Tugas Terpenuhi

- ✅ Basic Tag HTML & Format Teks
- ✅ Menyisipkan Gambar, Suara, dan Video
- ✅ Hyperlink & Navigasi
- ✅ Table
- ✅ Form
- ✅ CSS (Cascading Style Sheet)
- ✅ Division (DIV) & Layout
- ✅ JavaScript

---

## 📸 Screenshot

Untuk screenshot halaman, silakan:
1. Buka website di browser
2. Ambil screenshot setiap section:
   - Home/Hero section
   - About section (dengan video, audio, dan table)
   - Skills section
   - Portfolio section
   - Gallery section
   - Contact section (dengan form)

---

## 🚀 Cara Menjalankan

1. Buka file `index.html` di browser web
2. Pastikan semua file CSS dan JavaScript ter-load dengan benar
3. Untuk file audio/video, tambahkan file ke folder `media/` sesuai instruksi di `media/README.md`

---

**Dibuat oleh**: Haikal Saputra Mamonto  
**Tanggal**: 2025  
**Untuk**: Tugas Project Web Portfolio CV

