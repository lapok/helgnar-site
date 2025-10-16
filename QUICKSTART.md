# ⚡ Быстрый старт

## 🚀 За 5 минут на GitHub

### 1. Подготовка (1 минута)
```bash
# Сделайте скрипт исполняемым (Linux/Mac)
chmod +x setup-git.sh

# Запустите скрипт настройки
./setup-git.sh
```

### 2. Создание репозитория (2 минуты)
1. Перейдите на [GitHub.com](https://github.com)
2. Нажмите "New repository"
3. Название: `helgnar-site`
4. Описание: `Official website for Helgnar the Conqueror`
5. Сделайте публичным
6. **НЕ** добавляйте README, .gitignore или лицензию
7. Нажмите "Create repository"

### 3. Загрузка кода (2 минуты)
```bash
# Добавьте удаленный репозиторий (замените YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/helgnar-site.git

# Загрузите код
git push -u origin main
```

### 4. Настройка GitHub Pages (1 минута)
1. Перейдите в Settings репозитория
2. Найдите "Pages" в левом меню
3. Source: "Deploy from a branch"
4. Branch: "main"
5. Folder: "/ (root)"
6. Нажмите "Save"

### 5. Готово! 🎉
Ваш сайт будет доступен по адресу:
`https://YOUR_USERNAME.github.io/helgnar-site`

---

## 🛠️ Локальная разработка

### Простой способ
```bash
# Откройте index.html в браузере
open index.html
```

### С локальным сервером
```bash
# Python 3
python -m http.server 8000

# Node.js (если установлен)
npx serve .

# PHP
php -S localhost:8000
```

---

## 📱 Тестирование

### Проверка адаптивности
1. Откройте сайт в браузере
2. Нажмите F12 (DevTools)
3. Включите режим устройства
4. Протестируйте разные размеры экрана

### Проверка производительности
1. Откройте DevTools (F12)
2. Перейдите на вкладку "Lighthouse"
3. Выберите "Performance"
4. Нажмите "Generate report"

---

## 🔧 Быстрые команды

```bash
# Запуск локального сервера
npm start

# Разработка с live reload
npm run dev

# Минификация для продакшена
npm run build

# Оптимизация изображений
npm run optimize-images

# Проверка производительности
npm run lighthouse
```

---

## 🆘 Решение проблем

### Проблема: Изображения не загружаются
**Решение:** Проверьте пути к файлам в HTML

### Проблема: Стили не применяются
**Решение:** Очистите кэш браузера (Ctrl+F5)

### Проблема: GitHub Pages не работает
**Решение:** 
1. Проверьте настройки Pages в Settings
2. Убедитесь, что файл index.html в корне
3. Подождите 5-10 минут для обновления

### Проблема: Мобильная версия не работает
**Решение:** 
1. Проверьте viewport meta тег
2. Убедитесь в наличии медиа-запросов
3. Протестируйте на реальном устройстве

---

## 📞 Поддержка

- **Email:** hellknightsstudios@gmail.com
- **Issues:** [GitHub Issues](https://github.com/YOUR_USERNAME/helgnar-site/issues)
- **Документация:** README.md

---

**Время настройки:** ~5 минут  
**Сложность:** ⭐ (Очень легко)  
**Требования:** Git, GitHub аккаунт

