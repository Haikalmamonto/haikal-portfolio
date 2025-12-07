@echo off
echo ========================================
echo  Deploy Portfolio ke GitHub Pages
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Git tidak terinstall!
    echo Silakan download Git dari: https://git-scm.com/downloads
    pause
    exit /b 1
)

echo [1/4] Menambahkan semua file...
git add .
if errorlevel 1 (
    echo [ERROR] Gagal menambahkan file!
    pause
    exit /b 1
)

echo [2/4] Membuat commit...
set /p commit_msg="Masukkan pesan commit (atau tekan Enter untuk default): "
if "%commit_msg%"=="" set commit_msg=Update portfolio
git commit -m "%commit_msg%"
if errorlevel 1 (
    echo [WARNING] Tidak ada perubahan untuk di-commit
)

echo [3/4] Push ke GitHub...
git push
if errorlevel 1 (
    echo.
    echo [ERROR] Gagal push ke GitHub!
    echo.
    echo Kemungkinan penyebab:
    echo - Belum setup remote repository
    echo - Belum login ke GitHub
    echo - Repository belum dibuat di GitHub
    echo.
    echo Lihat file DEPLOY.md untuk panduan lengkap!
    pause
    exit /b 1
)

echo.
echo [4/4] Selesai!
echo.
echo Website akan ter-update dalam 1-2 menit.
echo Cek di: https://USERNAME.github.io/REPOSITORY-NAME/
echo.
pause

