FROM node:16.15-alpine

RUN addgroup -g 10001 app && \
    adduser -D -G app -h /app -u 10001 app
RUN rm -rf /tmp/*

WORKDIR /app

USER app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci --audit=false && rm -rf ~app/.npm /tmp/*

COPY --chown=app:app . /app

COPY .env-dist ./.env

RUN npm run build

CMD node server.js
