FROM node:14-alpine

RUN addgroup -g 10001 app && \
    adduser -D -G app -h /app -u 10001 app
RUN npm update -g
RUN npm install npm@7
RUN rm -rf /usr/local/lib/node_modules/npm
RUN mv node_modules/npm /usr/local/lib/node_modules/npm
RUN npm -v
RUN rm -rf /tmp/*

WORKDIR /app

USER app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install --production && rm -rf ~app/.npm /tmp/*

COPY --chown=app:app . /app

RUN npm run build:all

CMD NODE_ICU_DATA=./node_modules/full-icu node server.js
