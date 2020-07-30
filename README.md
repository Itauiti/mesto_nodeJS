Версия 0.0.1

## О проекте:
Учебный проект в ЯндексПрактикуме по основам бэкэнда (node.js)

## Основной функционал: 
1. Создан сервер для проекта Mesto, раздает статику (вебпак проекта https://github.com/Itauiti/webpack-project.git)
2. Обработка ошибок запросов на сервер
3. Настроено 3 роутера: 
- GET localhost:3000/users - раздает JSON-список всех пользователей
- GET localhost:3000/cards - раздает JSON-список всех карточек
- GET localhost:3000/users/8340d0ec33270a25f2413b69 - раздает JSON-пользователя с переданным после /users идентификатором

## Стэк технологий:
Node.js, express.js, ES6, OOP, CSS3, HTML5, BEM

## Пакеты которые используются в сборках:
- [ESLint](https://www.npmjs.com/package/eslint)
eslint-config-airbnb-base, eslint-plugin-import

## Инструкции по запуску:
- Скачать или склонировать репозитори
- Установить зависимости при помощи npm - `npm i`
- Запустить сервер на localhost:3000 - `npm run start`

