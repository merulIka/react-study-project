# Шаблон React (Vite)

Готовый шаблон проекта на React + Vite.

## Как использовать

1. Скопируйте папку `template` в новую папку проекта.
2. Установите зависимости:

```bash
npm install
```

3. Запустите проект в режиме разработки:

```bash
npm run dev
```

## Команды

- `npm run dev` — запуск сервера разработки
- `npm run build` — сборка для продакшена
- `npm run preview` — просмотр собранной версии
- `npm run lint` — проверка кода

## Структура

```
template/
├── index.html          — входной HTML
├── vite.config.js      — конфигурация Vite
├── package.json        — зависимости и скрипты
├── public/
│   └── favicon.ico
└── src/
    ├── main.jsx        — точка входа
    ├── App.jsx         — корневой компонент
    ├── App.css         — стили компонента
    └── index.css       — глобальные стили
```
