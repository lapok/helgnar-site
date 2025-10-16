# 🖥️ Local Testing Guide for Textolite

## 📋 Overview

Для тестирования Textolite редактора нужен локальный сервер с поддержкой PHP. Вот несколько способов настройки.

## 🚀 Method 1: XAMPP (Windows - Recommended)

### Installation
1. **Скачайте XAMPP** с [apachefriends.org](https://www.apachefriends.org/download.html)
2. **Установите** с настройками по умолчанию
3. **Запустите XAMPP Control Panel**

### Setup
1. **Запустите Apache** в XAMPP Control Panel
2. **Скопируйте проект** в папку `C:\xampp\htdocs\helgnar-site\`
3. **Откройте браузер** и перейдите на `http://localhost/helgnar-site/`

### Testing Textolite
1. **Откройте** `http://localhost/helgnar-site/textolite/`
2. **Войдите** в редактор (логин/пароль в conf.ini)
3. **Протестируйте** редактирование файлов

## 🐧 Method 2: PHP Built-in Server

### Requirements
- **PHP 5.2+** установлен
- **Command line** доступ

### Setup
```bash
# Перейдите в папку проекта
cd C:\Users\user\Desktop\projects\helgnar-site

# Запустите PHP сервер
php -S localhost:8000

# Откройте браузер
# http://localhost:8000
```

### Testing
- **Основной сайт:** `http://localhost:8000/`
- **Textolite:** `http://localhost:8000/textolite/`

## 🐳 Method 3: Docker (Advanced)

### Dockerfile
```dockerfile
FROM php:7.4-apache
COPY . /var/www/html/
RUN chmod -R 755 /var/www/html/
EXPOSE 80
```

### Commands
```bash
# Сборка образа
docker build -t helgnar-site .

# Запуск контейнера
docker run -p 8080:80 helgnar-site

# Открыть в браузере
# http://localhost:8080
```

## 🔧 Method 4: Live Server + PHP Extension

### VS Code Extension
1. **Установите** "Live Server" extension
2. **Установите** "PHP Server" extension
3. **Настройте** PHP Server для обработки .php файлов

### Configuration
```json
// settings.json
{
  "phpserver.phpPath": "C:\\xampp\\php\\php.exe",
  "phpserver.documentRoot": "${workspaceFolder}",
  "phpserver.port": 8000
}
```

## 🧪 Testing Checklist

### Basic Functionality
- [ ] **Сайт загружается** на localhost
- [ ] **Все изображения** отображаются
- [ ] **JavaScript** работает корректно
- [ ] **CSS стили** применяются

### Textolite Editor
- [ ] **Доступ к редактору** `/textolite/`
- [ ] **Авторизация** работает
- [ ] **Список файлов** отображается
- [ ] **Редактирование** файлов работает
- [ ] **Сохранение** изменений работает
- [ ] **Создание** новых файлов работает

### File Permissions
- [ ] **Папка textolite** имеет права на запись
- [ ] **Файлы** можно редактировать
- [ ] **Логи** записываются в error.log

## 🚨 Troubleshooting

### Common Issues

#### 1. PHP Not Working
```bash
# Проверьте версию PHP
php --version

# Проверьте модули
php -m | grep -i curl
```

#### 2. Permission Denied
```bash
# Windows (PowerShell as Admin)
icacls "C:\xampp\htdocs\helgnar-site" /grant Everyone:F /T

# Linux/Mac
chmod -R 755 /path/to/project
chown -R www-data:www-data /path/to/project
```

#### 3. Textolite Login Issues
- **Проверьте** `textolite/conf.ini`
- **Убедитесь** что логин/пароль правильные
- **Проверьте** права доступа к файлу

#### 4. File Upload Issues
- **Проверьте** `upload_max_filesize` в php.ini
- **Проверьте** `post_max_size` в php.ini
- **Проверьте** права на папку uploads

### Debug Mode
```php
// В textolite/textolite.php добавьте в начало:
error_reporting(E_ALL);
ini_set('display_errors', 1);
```

## 📊 Performance Testing

### Local vs Production
```bash
# Тест производительности
ab -n 100 -c 10 http://localhost/helgnar-site/

# Проверка памяти
php -d memory_limit=256M -S localhost:8000
```

### Browser DevTools
1. **Network tab** - проверьте время загрузки
2. **Console** - проверьте ошибки JavaScript
3. **Performance** - профилируйте производительность

## 🔒 Security Testing

### Local Security
- [ ] **Проверьте** доступ к конфиденциальным файлам
- [ ] **Протестируйте** авторизацию Textolite
- [ ] **Проверьте** права доступа к файлам
- [ ] **Протестируйте** загрузку файлов

### Production Readiness
- [ ] **Отключите** debug режим
- [ ] **Настройте** HTTPS
- [ ] **Ограничьте** доступ к админке
- [ ] **Настройте** бэкапы

## 📝 Logs and Monitoring

### Error Logs
```bash
# XAMPP logs
C:\xampp\apache\logs\error.log
C:\xampp\php\logs\php_error_log

# Textolite logs
./textolite/error.log
```

### Monitoring
```php
// Добавьте в начало index.php для мониторинга
if (isset($_GET['debug'])) {
    phpinfo();
    exit;
}
```

## 🎯 Next Steps

1. **Выберите метод** настройки локального сервера
2. **Установите** необходимые компоненты
3. **Протестируйте** основной сайт
4. **Протестируйте** Textolite редактор
5. **Проверьте** все функции
6. **Подготовьте** к продакшену

## 🔗 Resources

- [XAMPP Download](https://www.apachefriends.org/download.html)
- [PHP Manual](https://www.php.net/manual/)
- [Textolite Documentation](https://textolite.ru/)
- [Apache Configuration](https://httpd.apache.org/docs/)
