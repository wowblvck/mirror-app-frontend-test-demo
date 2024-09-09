# Mirror App Fake Server

Данный сервер разработан в рамках тестового задания на Frontend-разработчика.

Используются следующие инструменты и библиотеки:

- [JSON-Server](json-server)
- [Faker.js](faker-js)

Параметры запросов к API имеют тот же функционал, что и представлен у [JSON-Server](json-server)

## Запуск

1. Установить зависимости `npm install`.
2. Запуск сервера `npm run start`.
3. Проверьте, что сервер запущен:
   - Порт сервера - `4000`
   - Адрес сервера - `http://localhost:4000`
4. Отправьте `GET` запрос на адрес `http://localhost:4000`. В ответе вы увидите HTML-документ.

## API

1. GET запрос настроек (`/settings`). При каждом запросе генерируются новые настройки.

```json
{
    "layout": {
      "current": string,
      "params": {
        "grid": {
          "columns": number,
          "rows": number,
        },
        "masonry": {
          "columns": number,
          "rows": number,
        }
      }
    },
    "template": string,
    "navigation": string
}
```

2. GET запрос постов (`/posts`)

```json
[
  {
    "caption": string,
    "id": string,
    "comments": number,
    "likes": number,
    "date": string,
    "permalink": string,
    "userId": string
  }
],
```

[json-server]: https://www.npmjs.com/package/json-server
[faker-js]: https://fakerjs.dev/
