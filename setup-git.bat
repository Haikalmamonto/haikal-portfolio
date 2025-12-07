@echo off
echo ========================================
echo  Setup Git untuk Portfolio
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Git tidak terinstall!
    echo.
    echo Silakan download dan install Git terlebih dahulu:
    echo https://git-scm.com/downloads
    echo.
    pause
    exit /b 1
)

echo Git sudah terinstall!
echo.

REM Check if already initialized
if exist .git (
    echo [INFO] Repository Git sudah diinisialisasi.
    echo.
) else (
    echo [1/3] Inisialisasi Git repository...
    git init
    if errorlevel 1 (
        echo [ERROR] Gagal inisialisasi Git!
        pause
        exit /b 1
    )
    echo [OK] Repository Git berhasil diinisialisasi!
    echo.
)

echo [2/3] Menambahkan semua file...
git add .
if errorlevel 1 (
    echo [ERROR] Gagal menambahkan file!
    pause
    exit /b 1
)
echo [OK] File berhasil ditambahkan!
echo.

echo [3/3] Membuat commit pertama...
git commit -m "Initial commit: Portfolio website"
if errorlevel 1 (
    echo [WARNING] Commit gagal atau tidak ada perubahan.
) else (
    echo [OK] Commit berhasil dibuat!
)
echo.

echo ========================================
echo  Setup Selesai!
echo ========================================
echo.
echo Langkah selanjutnya:
echo 1. Buat repository di GitHub (github.com)
echo 2. Copy URL repository Anda
echo 3. Jalankan perintah berikut (ganti URL dengan milik Anda):
echo.
echo    git remote add origin https://github.com/USERNAME/REPOSITORY-NAME.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo Atau lihat file DEPLOY.md untuk panduan lengkap!
echo.
pause

