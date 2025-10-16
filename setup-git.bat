@echo off
echo 🎮 Настройка Git репозитория для Helgnar the Conqueror...
echo.

REM Проверка наличия Git
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git не установлен. Пожалуйста, установите Git и попробуйте снова.
    pause
    exit /b 1
)

REM Инициализация Git репозитория
echo 📁 Инициализация Git репозитория...
git init

REM Добавление всех файлов
echo 📝 Добавление файлов в репозиторий...
git add .

REM Первый коммит
echo 💾 Создание первого коммита...
git commit -m "🎮 Initial commit: Helgnar the Conqueror official website

✨ Features:
- Responsive design for all devices
- Lazy loading for images
- WebP support for modern browsers
- Interactive media gallery
- Contact section with social links
- Smooth animations and transitions

🛠️ Tech stack:
- HTML5 semantic markup
- CSS3 with Grid and Flexbox
- JavaScript ES6+ for interactivity
- Intersection Observer API for lazy loading
- WebP optimization with fallback"

echo.
echo ✅ Git репозиторий успешно инициализирован!
echo.
echo 📋 Следующие шаги:
echo 1. Создайте репозиторий на GitHub
echo 2. Добавьте удаленный репозиторий:
echo    git remote add origin https://github.com/YOUR_USERNAME/helgnar-site.git
echo 3. Загрузите код на GitHub:
echo    git push -u origin main
echo.
echo 🌐 Для развертывания на GitHub Pages:
echo 1. Перейдите в Settings ^> Pages
echo 2. Выберите 'Deploy from a branch'
echo 3. Выберите 'main' branch и '/ (root)' folder
echo 4. Сайт будет доступен по адресу: https://YOUR_USERNAME.github.io/helgnar-site
echo.
echo 📚 Подробные инструкции в файле DEPLOYMENT.md
echo.
echo 🎮 Добро пожаловать на путь завоевателя! 🗡️
pause

