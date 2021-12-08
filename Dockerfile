FROM node:17-alpine

WORKDIR /home/app

COPY package*.json ./
COPY tsconfig.json ./
COPY .env.prod ./.env

RUN npm --only-prod install

COPY ./src ./src
COPY ./orm ./orm
ENV PORT=3000

RUN npm run build