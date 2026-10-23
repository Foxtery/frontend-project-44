### Hexlet tests and linter status:
[![Actions Status](https://github.com/Foxtery/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Foxtery/frontend-project-44/actions)
### SonarQube Status:
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Foxtery_frontend-project-44&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Foxtery_frontend-project-44)

# Brain Games

Набор из пяти консольных математических игр, разработанный на JavaScript.

Каждая игра задаёт пользователю вопросы. Чтобы победить, необходимо правильно ответить на три вопроса подряд. При неверном ответе игра завершается.

Учебный проект программы «Фронтенд-разработчик» на Hexlet.

## Игры

| Команда | Описание |
|---------|----------|
| `brain-even` | Определить, является ли число чётным |
| `brain-calc` | Вычислить результат математического выражения |
| `brain-gcd` | Найти наибольший общий делитель двух чисел |
| `brain-progression` | Найти пропущенный элемент арифметической прогрессии |
| `brain-prime` | Определить, является ли число простым |

## Технологии

- JavaScript (ES Modules)
- Node.js
- readline-sync — взаимодействие с пользователем через терминал
- npm
- ESLint
- Git

## Установка

Требуются Node.js и npm.

```bash
git clone https://github.com/Foxtery/frontend-project-44.git
cd frontend-project-44
npm ci
```

## Запуск игр

Приветствие:

```bash
node bin/brain-games.js
```

Проверка на чётность:

```bash
node bin/brain-even.js
```

Калькулятор:

```bash
node bin/brain-calc.js
```

Наибольший общий делитель:

```bash
node bin/brain-gcd.js
```

Арифметическая прогрессия:

```bash
node bin/brain-progression.js
```

Простое число:

```bash
node bin/brain-prime.js
```


## Структура проекта

- `bin/` — исполняемые файлы для запуска игр.
- `src/games/` — логика отдельных игр.
- `src/index.js` — общий игровой движок.
- `src/cli.js` — взаимодействие с пользователем.


## Автор

GitHub: [Foxtery](https://github.com/Foxtery)