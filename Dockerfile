FROM node:14-slim

RUN groupadd --gid 10001 app
RUN useradd --uid 10001 --gid 10001 --home-dir /app -m app

RUN npm update -g
RUN rm -rf /tmp/*

WORKDIR /app

USER app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install --production && rm -rf ~app/.npm /tmp/*

COPY --chown=app:app . /app

RUN npm run build:all

CMD NODE_ICU_DATA=./node_modules/full-icu node server.js
