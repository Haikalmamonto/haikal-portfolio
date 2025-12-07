# 🚀 Panduan Deploy ke GitHub Pages

Panduan lengkap untuk menghosting website portfolio Anda di GitHub Pages secara gratis.

## 📋 Prasyarat

1. **Akun GitHub** - Jika belum punya, daftar di [github.com](https://github.com)
2. **Git** - Pastikan Git sudah terinstall di komputer Anda
   - Download: [git-scm.com](https://git-scm.com/downloads)
   - Cek instalasi: Buka terminal/cmd dan ketik `git --version`

## 🎯 Langkah-langkah Deploy

### Langkah 1: Install Git (Jika Belum)

1. Download Git dari [git-scm.com](https://git-scm.com/downloads)
2. Install dengan default settings
3. Buka **Git Bash** (Windows) atau **Terminal** (Mac/Linux)

### Langkah 2: Buat Repository di GitHub

1. Login ke [github.com](https://github.com)
2. Klik tombol **"+"** di kanan atas → pilih **"New repository"**
3. Isi form:
   - **Repository name**: `portfolio` atau `haikal-portfolio` (atau nama lain)
   - **Description**: (opsional) "Portfolio Website - Haikal Saputra Mamonto"
   - **Visibility**: Pilih **Public** (gratis untuk GitHub Pages)
   - **JANGAN** centang "Add a README file" (karena kita sudah punya file)
4. Klik **"Create repository"**

### Langkah 3: Inisialisasi Git di Folder Project

1. Buka **Git Bash** atau **Terminal**
2. Navigate ke folder project Anda:
   ```bash
   cd "C:\Projek Pemrograman Web\Haikal Saputra Mamonto"
   ```
3. Inisialisasi Git:
   ```bash
   git init
   ```
4. Tambahkan semua file:
   ```bash
   git add .
   ```
5. Buat commit pertama:
   ```bash
   git commit -m "Initial commit: Portfolio website"
   ```

### Langkah 4: Hubungkan dengan GitHub Repository

1. Di halaman repository GitHub yang baru dibuat, copy URL repository
   - Klik tombol hijau **"Code"** → copy URL (contoh: `https://github.com/username/portfolio.git`)

2. Tambahkan remote repository:
   ```bash
   git remote add origin https://github.com/USERNAME/REPOSITORY-NAME.git
   ```
   **Ganti USERNAME dan REPOSITORY-NAME dengan milik Anda!**
   
   Contoh:
   ```bash
   git remote add origin https://github.com/haikal123/portfolio.git
   ```

3. Rename branch ke `main` (jika perlu):
   ```bash
   git branch -M main
   ```

4. Push ke GitHub:
   ```bash
   git push -u origin main
   ```

5. Jika diminta login:
   - Username: username GitHub Anda
   - Password: **Personal Access Token** (bukan password GitHub!)
   - Jika belum punya token, lihat cara membuat di bawah

### Langkah 5: Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Klik tab **"Settings"** (di bagian atas)
3. Scroll ke bagian **"Pages"** (di sidebar kiri)
4. Di bagian **"Source"**:
   - Pilih branch: **`main`**
   - Pilih folder: **`/ (root)`**
5. Klik **"Save"**

### Langkah 6: Tunggu Deployment

1. GitHub akan memproses deployment (butuh 1-2 menit)
2. Refresh halaman Settings → Pages
3. Anda akan melihat URL website Anda:
   ```
   https://USERNAME.github.io/REPOSITORY-NAME/
   ```
   Contoh: `https://haikal123.github.io/portfolio/`

4. Klik URL tersebut untuk melihat website Anda!

## 🔑 Membuat Personal Access Token (Jika Diperlukan)

Jika Git meminta password, Anda perlu Personal Access Token:

1. Login ke GitHub
2. Klik foto profil → **Settings**
3. Scroll ke bawah → **Developer settings**
4. Klik **Personal access tokens** → **Tokens (classic)**
5. Klik **Generate new token** → **Generate new token (classic)**
6. Isi:
   - **Note**: "Portfolio Deploy"
   - **Expiration**: Pilih durasi (90 days atau custom)
   - **Scopes**: Centang **`repo`** (semua sub-options akan tercentang)
7. Klik **Generate token**
8. **COPY TOKEN SEKARANG!** (hanya muncul sekali)
9. Gunakan token ini sebagai password saat push

## 📝 Update Website (Setelah Perubahan)

Setelah mengubah file di website, ikuti langkah ini untuk update:

```bash
# 1. Navigate ke folder project
cd "C:\Projek Pemrograman Web\Haikal Saputra Mamonto"

# 2. Tambahkan perubahan
git add .

# 3. Commit perubahan
git commit -m "Update portfolio: [deskripsi perubahan]"

# 4. Push ke GitHub
git push
```

Website akan otomatis ter-update dalam 1-2 menit!

## 🎨 Custom Domain (Opsional)

Jika Anda punya domain sendiri (misalnya: `haikal.com`):

1. Di Settings → Pages, scroll ke **Custom domain**
2. Masukkan domain Anda
3. Ikuti instruksi untuk setup DNS
4. GitHub akan otomatis generate SSL certificate

## ⚠️ Troubleshooting

### Error: "Repository not found"
- Pastikan URL repository benar
- Pastikan repository adalah Public
- Cek apakah sudah login dengan benar

### Error: "Permission denied"
- Pastikan Personal Access Token sudah benar
- Pastikan token memiliki permission `repo`

### Website tidak muncul
- Tunggu 2-3 menit (deployment butuh waktu)
- Cek Settings → Pages, pastikan sudah aktif
- Pastikan file `index.html` ada di root folder
- Cek Actions tab untuk melihat error (jika ada)

### File tidak ter-update
- Pastikan sudah commit dan push
- Clear cache browser (Ctrl+F5)
- Tunggu beberapa menit untuk deployment

### Path file tidak benar
- Pastikan semua path relatif (menggunakan `../` bukan absolute path)
- Contoh: `href="../css/style.css"` bukan `href="C:/css/style.css"`

## 📚 Tips & Best Practices

1. **Commit Message yang Jelas**
   ```bash
   git commit -m "Add new project: Roblox Map"
   git commit -m "Update skills section"
   git commit -m "Fix mobile responsive design"
   ```

2. **Backup Lokal**
   - Selalu simpan backup folder project di komputer
   - GitHub adalah backup online, tapi tetap simpan lokal

3. **Update Secara Berkala**
   - Update portfolio secara berkala dengan proyek baru
   - Update skills dan experience

4. **Test Sebelum Deploy**
   - Test website di browser lokal sebelum push
   - Pastikan semua link berfungsi
   - Test di berbagai device

## 🎉 Selesai!

Website portfolio Anda sekarang sudah online di GitHub Pages!

**URL Format:**
```
https://USERNAME.github.io/REPOSITORY-NAME/
```

**Contoh:**
```
https://haikalsaputra.github.io/portfolio/
```

Selamat! Website portfolio Anda sudah bisa diakses oleh siapa saja di internet! 🚀

---

**Butuh bantuan?** 
- Dokumentasi GitHub Pages: [docs.github.com/pages](https://docs.github.com/pages)
- GitHub Community: [github.community](https://github.community)

