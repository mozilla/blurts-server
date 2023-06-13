FROM node:18.12-alpine

RUN addgroup -g 10001 app && \
    adduser -D -G app -h /app -u 10001 app
RUN rm -rf /tmp/*

WORKDIR /app

USER app

COPY package.json package.json
COPY package-lock.json package-lock.json

COPY --chown=app:app . /app

RUN npm ci --audit=false && rm -rf ~app/.npm /tmp/*
RUN npm run build

COPY .env-dist ./.env

ARG SENTRY_RELEASE
ENV SENTRY_RELEASE=$SENTRY_RELEASE

CMD ["npm", "start"]
