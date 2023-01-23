FROM node:19.4-alpine

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

ARG SENTRY_RELEASE
ENV SENTRY_RELEASE=$SENTRY_RELEASE

CMD ["npm", "start"]
