FROM node:19.8-alpine

RUN addgroup -g 10001 app && \
    adduser -D -G app -h /app -u 10001 app
RUN rm -rf /tmp/*

WORKDIR /app

USER app

COPY package.json package.json
COPY package-lock.json package-lock.json

COPY src/package.json ./src/package.json

COPY --chown=app:app . /app

RUN npm ci --audit=false && rm -rf ~app/.npm /tmp/*

COPY .env-dist ./.env

ARG SENTRY_RELEASE
ENV SENTRY_RELEASE=$SENTRY_RELEASE

CMD ["npm", "start"]
