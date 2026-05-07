# First Fumigation Company — Website

SEO‑оптимізований корпоративний сайт (лендинг + сторінки послуг) для **First Fumigation Company / Перша фумігаційна компанія**.

## Розробка

Запуск dev‑сервера:

```bash
npm run dev
```

Далі відкрийте `http://localhost:3000`.

## Продакшн

Збірка та запуск:

```bash
npm run build
npm start
```

## Налаштування контенту

- Контакти, місто та базові SEO‑параметри: `src/lib/site.ts`
- Перелік послуг і тексти сторінок: `src/lib/services.ts`

## Важливо для SEO

Для коректних canonical URL, `sitemap.xml` і `robots.txt` задайте змінну середовища:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.ua
```
