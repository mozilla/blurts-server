FROM node:8.11.2-alpine

RUN addgroup -g 10001 app && \
    adduser -D -G app -h /app -u 10001 app

WORKDIR /app

USER app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install && rm -rf ~app/.npm /tmp/*

COPY . /app

USER root
RUN chown app:app /app

USER app
CMD node server.js
