# Barista1

Интерактивный экзамен для бариста: 20 вопросов о кофе, экстракции, молоке и латте-арте. С вопросами-подвохами.

## Демо

**https://jyrbanay-del.github.io/Barista1/**

## Как работает

1. Ученик вводит имя и email
2. Проходит тест (20 вопросов)
3. После проверки результат автоматически отправляется владельцу на почту

## Технологии

- HTML5
- CSS3 (inline, тёмная тема)
- JavaScript (vanilla, inline)
- [Formspree](https://formspree.io) — для отправки результатов

## Как запустить локально

```bash
git clone https://github.com/jyrbanay-del/Barista1.git
cd Barista1
# Откройте index.html в браузере
```

## Настройка отправки почты

1. Зарегистрируйтесь на [formspree.io](https://formspree.io)
2. Создайте новую форму
3. Скопируйте URL формы
4. Вставьте его в `index.html` в переменную `FORMSPREE_URL`

## Структура проекта

```
Barista1/
  index.html    -- главная страница (всё в одном файле)
  README.md
  LICENSE
  .gitignore
```

## Лицензия

MIT License
