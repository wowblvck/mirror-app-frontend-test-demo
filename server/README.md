# Mirror App Fake Server

Данный сервер разработан в рамках тестового задания на Frontend-разработчика.

В рамках разработки использовались следующие пакеты:

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

1. GET запрос настроек (`/settings`)

```json
{
    "layout": string,
    "template": string,
    "columns": {
        "grid": number,
        "masonry": number
    }
}
```

2. GET запрос постов вместе с пользователем (`/posts?_expand=user`)

```json
[
  {
    "caption": string,
    "id": string,
    "comments": number,
    "likes": number,
    "permalink": string,
    "userId": string,
    "user": {
        "id": string,
        "username": string,
        "postId": string
    }
  }
],
```

[json-server]: https://www.npmjs.com/package/json-server
[faker-js]: https://fakerjs.dev/
