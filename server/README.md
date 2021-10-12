# Бекенд сервер для boring-weekend

## Зависимости

### Системные

```
node.js v^14.16.0
```

### Глобальные пакеты nodejs

```
yarn v^1.22.10
nodemon v^2.0.7
```

## Установка

Скачиваем исходники:

```
git clone https://github.com/blindbeat/sweet
```

Переходим в папку `server` проекта:

```
cd sweet/server
```

Устанавливаем зависимости

```
yarn install
```

**При первичной установке, переименовать файл `.env.example` в `.env` и настроить его**

Запускаем проведение миграций из папки `orm/migrations` в базу:

```
yarn migrate
```

Собираем проект

```
yarn build
```

Запускаем сервер на 3333 порту:

```
yarn start
```
