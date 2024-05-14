# Проект "Занятие для капитана Смита"

## Запуск проекта

1. Склонируйте репозиторий на свой компьютер.
2. Откройте файл `index.html` в любом веб-браузере.

## Описание индивидуальной работы

Этот проект предназначен для отображения случайных активностей, которыми может заниматься капитан Смит. Он использует внешний API для получения случайных активностей и отображает их на веб-странице. Проект также обновляет данные каждую минуту.

## Краткая документация проекта

### Файлы проекта:

- `index.html`: Основной HTML-файл, содержащий структуру страницы.
- `index.css`: Файл стилей для оформления страницы.
- `/src/index.js`: Основной JavaScript-файл, обрабатывающий логику обновления данных и отображения активностей.
- `/src/activity.js`: Файл, содержащий логику получения данных с внешнего сервера.

### Использование проекта:

Откройте файл `index.html` в вашем веб-браузере, и вы увидите случайную активность для капитана Смита.

## Примеры использования проекта

![Пример активности](example.jpg)

## Ответы на контрольные вопросы

1. Функция `fetch` возвращает объект Promise, который представляет собой асинхронную операцию получения ресурса по сети (например, HTTP-запрос).

2. Объект Promise представляет результат асинхронной операции и её состояние (ожидание, выполнено успешно или выполнено с ошибкой). Он позволяет управлять асинхронными операциями в JavaScript, обеспечивая удобный способ обработки результатов асинхронных вызовов и управления последовательностью операций.

3. У объекта Promise доступны следующие методы:

   - `then()`: Используется для указания функции обратного вызова, которая будет выполнена при успешном завершении операции. Метод `then()` принимает два аргумента: функцию обратного вызова для обработки успешного результата и функцию обратного вызова для обработки ошибки.
   
   - `catch()`: Используется для указания функции обратного вызова, которая будет выполнена при возникновении ошибки в процессе выполнения операции.
   
   - `finally()`: Используется для указания функции обратного вызова, которая будет выполнена в любом случае после завершения операции, независимо от её результата (успешного выполнения или ошибки).

## Использованные источники

- [MDN Web Docs](https://developer.mozilla.org/)
- [Bored API](https://www.boredapi.com/)
- [Stack Overflow](https://stackoverflow.com/)

## Дополнительные важные аспекты

- Проект использует стандартные модули ECMAScript для организации кода.
- Логика получения данных вынесена в отдельный модуль `activity.js`.
- Обновление данных реализовано с использованием функции `setTimeout()`.