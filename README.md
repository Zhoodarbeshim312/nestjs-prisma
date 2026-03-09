<p align="left">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## CRUD API — NestJS + Prisma + Neon

REST API для управления продуктами, задеплоенное на Render.

## 🔗 Ссылки

- **API Base URL:** https://nestjs-prisma-0foi.onrender.com
- **Swagger Docs:** https://nestjs-prisma-0foi.onrender.com/docs

## 📦 Эндпоинты

| Метод | URL | Описание |
|-------|-----|----------|
| GET | `/get-all-products` | Получить все продукты |
| GET | `/get-by-id-product/:id` | Получить продукт по ID |
| POST | `/add-product` | Добавить продукт |
| PATCH | `/update-product/:id` | Обновить продукт |
| DELETE | `/delete-product/:id` | Удалить продукт |

## 🚀 Локальный запуск
```bash
pnpm install
pnpm run start:dev
```

## 🛠 Стек

- NestJS
- Prisma ORM
- PostgreSQL (Neon)
- Swagger
