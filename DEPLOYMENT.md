# 🚀 Инструкции по развертыванию

## ⚠️ Важные требования

### Для Textolite редактора
- **PHP 5.2+** (рекомендуется PHP 7.0+)
- **Веб-сервер** с поддержкой PHP (Apache, Nginx, IIS)
- **Права на запись** в папку textolite и корень сайта

### Платформы с поддержкой PHP
- ✅ **Netlify** (с PHP функциями)
- ✅ **Vercel** (с PHP функциями)
- ✅ **Shared хостинг** (cPanel, etc.)
- ✅ **VPS/Cloud серверы**
- ❌ **GitHub Pages** (только статические файлы)
- ❌ **Firebase Hosting** (только статические файлы)

## GitHub Pages

**⚠️ Ограничение:** GitHub Pages поддерживает только статические файлы. Textolite редактор будет недоступен.

### 1. Создание репозитория
1. Создайте новый репозиторий на GitHub
2. Назовите его `helgnar-site` или любое другое имя
3. Сделайте репозиторий публичным

### 2. Загрузка файлов
```bash
# Инициализация Git репозитория
git init

# Добавление всех файлов
git add .

# Первый коммит
git commit -m "Initial commit: Helgnar the Conqueror website"

# Добавление удаленного репозитория
git remote add origin https://github.com/YOUR_USERNAME/helgnar-site.git

# Загрузка на GitHub
git push -u origin main
```

### 3. Настройка GitHub Pages
1. Перейдите в Settings репозитория
2. Найдите раздел "Pages"
3. В "Source" выберите "Deploy from a branch"
4. Выберите "main" branch и "/ (root)" folder
5. Нажмите "Save"

### 4. Доступ к сайту
Сайт будет доступен по адресу:
`https://YOUR_USERNAME.github.io/helgnar-site`

## Netlify

### 1. Подготовка
1. Загрузите проект на GitHub
2. Перейдите на [netlify.com](https://netlify.com)

### 2. Развертывание
1. Нажмите "New site from Git"
2. Выберите GitHub и ваш репозиторий
3. Настройки:
   - Build command: оставьте пустым
   - Publish directory: оставьте пустым (корень)
4. Нажмите "Deploy site"

### 3. Настройка домена
1. В настройках сайта перейдите в "Domain management"
2. Добавьте кастомный домен (если есть)
3. Настройте DNS записи

## Vercel

### 1. Установка Vercel CLI
```bash
npm i -g vercel
```

### 2. Развертывание
```bash
# В папке проекта
vercel

# Следуйте инструкциям:
# - Link to existing project? N
# - Project name: helgnar-site
# - Directory: ./
# - Override settings? N
```

### 3. Автоматическое развертывание
1. Подключите GitHub репозиторий
2. Vercel будет автоматически развертывать при каждом push

## Firebase Hosting

**⚠️ Ограничение:** Firebase Hosting поддерживает только статические файлы. Textolite требует PHP, поэтому будет недоступен.

### 1. Установка Firebase CLI
```bash
npm install -g firebase-tools
```

### 2. Инициализация
```bash
firebase login
firebase init hosting

# Выберите:
# - Use existing project или создайте новый
# - Public directory: ./
# - Single-page app: N
# - Overwrite index.html: N
```

### 3. Развертывание
```bash
firebase deploy
```

## Оптимизация для продакшена

### 1. Минификация CSS и JS
```bash
# Установка инструментов
npm install -g clean-css-cli uglify-js

# Минификация CSS
cleancss -o css/style.min.css css/style.css

# Минификация JS
uglifyjs js/main.js -o js/main.min.js -c -m
```

### 2. Оптимизация изображений
```bash
# Установка imagemin
npm install -g imagemin-cli

# Оптимизация всех изображений
imagemin assets/**/*.{jpg,png} --out-dir=assets-optimized
```

### 3. Обновление HTML
Замените ссылки на минифицированные файлы:
```html
<link rel="stylesheet" href="css/style.min.css">
<script src="js/main.min.js"></script>
```

## Мониторинг и аналитика

### 1. Google Analytics
Добавьте в `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. Мониторинг производительности
- **Google PageSpeed Insights**
- **GTmetrix**
- **WebPageTest**

## SSL и безопасность

### 1. HTTPS
- GitHub Pages, Netlify, Vercel автоматически предоставляют SSL
- Для кастомных доменов настройте SSL сертификат

### 2. Безопасность заголовков
Добавьте в `.htaccess` (для Apache):
```apache
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
```

## Резервное копирование

### 1. Автоматические бэкапы
```bash
# Создание скрипта бэкапа
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
tar -czf "helgnar-site-backup-$DATE.tar.gz" .
```

### 2. Версионирование
- Используйте Git теги для релизов
- Ведите CHANGELOG.md
- Документируйте изменения

## Troubleshooting

### Проблемы с путями
- Убедитесь, что все пути относительные
- Проверьте регистр в именах файлов
- Используйте `/` в начале путей для абсолютных

### Проблемы с кэшированием
```html
<!-- Добавьте версионирование -->
<link rel="stylesheet" href="css/style.css?v=1.0.0">
<script src="js/main.js?v=1.0.0"></script>
```

### Проблемы с CORS
- Используйте HTTPS для всех ресурсов
- Настройте правильные заголовки на сервере
