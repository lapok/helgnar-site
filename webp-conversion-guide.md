# WebP Conversion Guide

## Автоматическая конвертация изображений в WebP

Для оптимизации производительности сайта все изображения должны быть конвертированы в WebP формат.

### Структура файлов

Создайте WebP версии для всех изображений в следующих папках:

```
assets/media/
├── screnshoots/
│   ├── slider1.png → slider1.webp
│   ├── slider2.png → slider2.webp
│   └── ...
├── videos/
│   ├── 1video.png → 1video.webp
│   ├── 2video.png → 2video.webp
│   └── ...
├── 21 features/
│   ├── feature-bg-1.jpg → feature-bg-1.webp
│   ├── feature-bg-2.jpg → feature-bg-2.webp
│   └── ...
└── arts/
    ├── 1art.png → 1art.webp
    ├── 2art.png → 2art.webp
    └── ...
```

### Команды для конвертации

#### Windows (с установленным cwebp):
```bash
# Для PNG файлов
for %f in (assets\media\screnshoots\*.png) do cwebp -q 80 "%f" -o "%~dpnf.webp"

# Для JPG файлов
for %f in (assets\media\21 features\*.jpg) do cwebp -q 80 "%f" -o "%~dpnf.webp"

# Для всех изображений в папке
for /r assets\media %f in (*.png *.jpg *.jpeg) do cwebp -q 80 "%f" -o "%~dpnf.webp"
```

#### Linux/Mac:
```bash
# Для PNG файлов
find assets/media -name "*.png" -exec cwebp -q 80 {} -o {}.webp \;

# Для JPG файлов
find assets/media -name "*.jpg" -exec cwebp -q 80 {} -o {}.webp \;

# Для всех изображений
find assets/media \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) -exec cwebp -q 80 {} -o {}.webp \;
```

### Онлайн конвертеры

Если нет доступа к cwebp, используйте онлайн конвертеры:
- https://convertio.co/png-webp/
- https://cloudconvert.com/png-to-webp
- https://www.freeconvert.com/png-to-webp

### Рекомендуемые настройки

- **Качество**: 80-85% (оптимальный баланс размера и качества)
- **Метод сжатия**: 6 (хорошее соотношение скорости и размера)
- **Потерянное сжатие**: для фотографий можно использовать lossy, для графики - lossless

### Проверка результатов

После конвертации проверьте:
1. Размер файлов уменьшился на 25-50%
2. Качество изображений приемлемое
3. Все WebP файлы загружаются корректно

### Fallback стратегия

JavaScript автоматически:
1. Проверяет поддержку WebP в браузере
2. Загружает WebP версию если поддерживается
3. Fallback к оригинальному формату если WebP не поддерживается
4. Обрабатывает ошибки загрузки

### Производительность

Ожидаемые улучшения:
- **Размер файлов**: уменьшение на 25-50%
- **Время загрузки**: ускорение на 20-40%
- **Трафик**: экономия до 50% для пользователей
- **SEO**: улучшение Core Web Vitals

