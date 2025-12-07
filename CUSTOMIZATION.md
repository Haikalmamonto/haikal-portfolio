# 📝 Panduan Kustomisasi Portfolio

File ini berisi panduan lengkap untuk mengkustomisasi website portfolio Anda.

## 🖼️ Mengganti Foto

### Foto Profil
1. Buka folder `images/profile/`
2. Ganti file `profile-photo.jpg` dengan foto profil Anda
   - Ukuran disarankan: **800x800px** (square)
   - Format: JPG atau PNG
   - Pastikan foto berkualitas baik dan jelas

3. Ganti file `about-photo.jpg` dengan foto untuk section About
   - Ukuran disarankan: **600x800px** (portrait)
   - Format: JPG atau PNG

### Foto Proyek
1. Buka folder `images/projects/`
2. Ganti file berikut dengan screenshot proyek Anda:
   - `project-1.jpg` - Proyek pertama
   - `project-2.jpg` - Proyek kedua
   - `project-3.jpg` - Proyek ketiga
   - `project-4.jpg` - Proyek keempat
   
   **Ukuran disarankan:** 800x600px (rasio 4:3)
   
3. Edit `index.html` untuk mengubah judul dan deskripsi proyek:
   - Cari section `<!-- Portfolio Section -->`
   - Ubah teks di dalam `.portfolio-overlay h3` (judul)
   - Ubah teks di dalam `.portfolio-overlay p` (deskripsi)

### Foto Gallery
1. Buka folder `images/gallery/`
2. Ganti file berikut dengan foto dokumentasi Anda:
   - `gallery-1.jpg` sampai `gallery-6.jpg`
   
   **Ukuran disarankan:** 600x600px (square)
   
3. Jika ingin menambah/mengurangi jumlah foto:
   - Edit `index.html` di section `<!-- Gallery Section -->`
   - Copy/paste atau hapus `.gallery-item` sesuai kebutuhan
   - Pastikan nama file JPG sesuai

## ✏️ Mengubah Informasi Personal

### Nama dan Identitas
Buka `index.html` dan cari:
- `Haikal Saputra Mamonto` - Ganti dengan nama Anda
- `Creative Developer & Designer` - Ganti dengan role/jabatan Anda
- `HSM` - Ganti inisial di logo (cari `.logo-text`)

### Deskripsi
1. **Hero Section** (bagian atas):
   - Cari `.hero-description`
   - Ubah teks deskripsi singkat tentang Anda

2. **About Section**:
   - Cari `.about-description`
   - Ubah paragraf tentang diri Anda
   - Bisa menambah/mengurangi paragraf

### Kontak
Cari dan ubah di `index.html`:
- **Email:** `haikal@example.com` → ganti dengan email Anda
- **Phone:** `+62 812-3456-7890` → ganti dengan nomor Anda
- **Location:** `Indonesia` → ganti dengan lokasi Anda

### Social Media
Di section Contact, cari link social media:
```html
<a href="#" class="social-link" aria-label="LinkedIn">
```
Ganti `#` dengan URL profil Anda:
- LinkedIn: `https://linkedin.com/in/username`
- GitHub: `https://github.com/username`
- Instagram: `https://instagram.com/username`

## 🎨 Mengubah Warna dan Tema

Buka `css/style.css` dan cari bagian `:root` di awal file:

```css
:root {
    --primary-color: #6366f1;      /* Warna utama (biru) */
    --primary-dark: #4f46e5;        /* Warna utama gelap */
    --primary-light: #818cf8;      /* Warna utama terang */
    --secondary-color: #ec4899;    /* Warna sekunder (pink) */
    --accent-color: #f59e0b;       /* Warna aksen (orange) */
    /* ... */
}
```

**Tips memilih warna:**
- Gunakan tool seperti [Coolors.co](https://coolors.co) untuk palet warna
- Pastikan kontras yang baik untuk readability
- Pilih 2-3 warna utama yang harmonis

## 📋 Mengubah Skills

1. Buka `index.html`
2. Cari section `<!-- Skills Section -->`
3. Edit setiap `.skill-card`:
   - Ubah icon SVG (opsional)
   - Ubah judul skill (di dalam `h3`)
   - Ubah deskripsi skill (di dalam `p`)
   - Ubah level skill: `data-level="90"` (0-100)

## 🎯 Mengubah Portfolio Projects

1. Buka `index.html`
2. Cari section `<!-- Portfolio Section -->`
3. Untuk setiap project:
   - Ubah `src` gambar: `images/projects/project-X.jpg`
   - Ubah judul: di dalam `.portfolio-overlay h3`
   - Ubah deskripsi: di dalam `.portfolio-overlay p`
   - Ubah link: `href="#"` di `.portfolio-link` (jika ada)

## 📧 Mengatur Contact Form

Contact form saat ini hanya menampilkan alert. Untuk mengintegrasikan dengan backend:

1. Buka `js/script.js`
2. Cari function `contactForm.addEventListener('submit', ...)`
3. Uncomment dan edit bagian:
```javascript
// fetch('/api/contact', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name, email, subject, message })
// })
```

**Alternatif:** Gunakan service seperti:
- [Formspree](https://formspree.io) - Gratis, mudah setup
- [EmailJS](https://www.emailjs.com) - Kirim email langsung dari frontend
- [Netlify Forms](https://www.netlify.com/products/forms/) - Jika deploy di Netlify

## 🔤 Mengubah Font

1. Buka `index.html`
2. Di bagian `<head>`, cari Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
```

3. Pilih font lain di [Google Fonts](https://fonts.google.com)
4. Ganti URL di atas
5. Buka `css/style.css` dan ubah:
```css
--font-primary: 'Poppins', sans-serif;      /* Font utama */
--font-display: 'Playfair Display', serif;  /* Font untuk judul */
```

## 📱 Testing Responsive

Setelah melakukan perubahan, pastikan website responsive:
1. Buka website di browser
2. Tekan `F12` untuk Developer Tools
3. Klik icon mobile/tablet untuk test berbagai ukuran layar
4. Atau resize jendela browser

## ✅ Checklist Sebelum Deploy

- [ ] Semua foto sudah diganti
- [ ] Informasi personal sudah diupdate
- [ ] Email dan kontak sudah benar
- [ ] Social media links sudah diisi
- [ ] Skills sudah sesuai
- [ ] Portfolio projects sudah diisi
- [ ] Gallery sudah diisi
- [ ] Warna sudah disesuaikan (opsional)
- [ ] Test di berbagai browser
- [ ] Test responsive design
- [ ] Semua link berfungsi

## 🆘 Troubleshooting

### Foto tidak muncul
- Pastikan nama file JPG sesuai dengan yang di HTML
- Pastikan file ada di folder yang benar
- Cek case sensitivity (huruf besar/kecil)

### Styling tidak berubah
- Clear cache browser (Ctrl+F5)
- Pastikan file CSS sudah disave
- Cek console browser untuk error (F12)

### JavaScript tidak bekerja
- Cek console browser untuk error (F12)
- Pastikan file `js/script.js` sudah di-load
- Pastikan tidak ada syntax error

---

**Selamat mengkustomisasi! 🎉**

