@echo off
echo ========================================
echo   Helgnar Site - Local Testing Setup
echo ========================================
echo.

echo Checking system requirements...

:: Check if PHP is installed
php --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ PHP is not installed
    echo.
    echo 📥 Please install PHP or XAMPP:
    echo    1. Download XAMPP: https://www.apachefriends.org/download.html
    echo    2. Install with default settings
    echo    3. Run this script again
    echo.
    echo 🔄 Alternative: Install PHP standalone
    echo    Download from: https://windows.php.net/download/
    echo.
    pause
    goto :eof
) else (
    echo ✅ PHP is installed
    php --version
)

echo.
echo ========================================
echo   Setting up local server...
echo ========================================

:: Create a simple PHP server script
echo Creating PHP server script...
(
echo ^<?php
echo // Simple PHP server for Helgnar Site
echo echo "Helgnar Site - Local Server Running";
echo echo "Main site: http://localhost:8000/";
echo echo "Textolite: http://localhost:8000/textolite/";
echo echo "Press Ctrl+C to stop";
echo ^?^>
) > server-info.php

:: Check if textolite directory exists
if not exist "textolite" (
    echo ❌ Textolite directory not found
    echo Please make sure you're in the project root directory
    pause
    goto :eof
)

:: Check textolite configuration
if exist "textolite\conf.ini" (
    echo ✅ Textolite configuration found
) else (
    echo ⚠️  Textolite configuration not found
    echo Creating default configuration...
    
    (
    echo [textolite]
    echo login=admin
    echo password=admin123
    echo theme=default
    echo lang=ru
    ) > textolite\conf.ini
)

:: Set file permissions (Windows)
echo Setting file permissions...
icacls "textolite" /grant Everyone:F /T >nul 2>&1

echo.
echo ========================================
echo   Starting local server...
echo ========================================
echo.
echo 🚀 Starting PHP server on http://localhost:8000
echo 📁 Project directory: %CD%
echo 🔧 Textolite editor: http://localhost:8000/textolite/
echo.
echo Press Ctrl+C to stop the server
echo.

:: Start PHP server
php -S localhost:8000

echo.
echo Server stopped.
pause
