@echo off
echo ========================================
echo   XAMPP Installation Helper
echo ========================================
echo.

echo This script will help you install XAMPP for local PHP testing.
echo.

echo 📥 Downloading XAMPP...
echo.
echo Please download XAMPP from the official website:
echo https://www.apachefriends.org/download.html
echo.
echo Choose the version for Windows (PHP 8.1 or 8.2 recommended)
echo.

echo After downloading:
echo 1. Run the installer as Administrator
echo 2. Install to default location (C:\xampp)
echo 3. Start Apache and MySQL services
echo 4. Run setup-local-testing.bat again
echo.

echo 🔧 Alternative: Manual Setup
echo.
echo 1. Download XAMPP from: https://www.apachefriends.org/download.html
echo 2. Install with default settings
echo 3. Copy this project to: C:\xampp\htdocs\helgnar-site\
echo 4. Open: http://localhost/helgnar-site/
echo 5. Test Textolite: http://localhost/helgnar-site/textolite/
echo.

echo 📋 What XAMPP includes:
echo - Apache Web Server
echo - PHP (latest version)
echo - MySQL Database
echo - phpMyAdmin
echo - FileZilla FTP
echo.

echo ⚠️  Important Notes:
echo - Run installer as Administrator
echo - Allow through Windows Firewall
echo - Keep default installation path
echo.

echo Press any key to open XAMPP download page...
pause >nul

:: Open XAMPP download page
start https://www.apachefriends.org/download.html

echo.
echo After installation, run setup-local-testing.bat to test your setup.
echo.
pause
