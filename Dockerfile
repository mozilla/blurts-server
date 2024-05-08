FROM node:22.1-alpine

RUN addgroup -g 10001 app && \
    adduser -D -G app -h /app -u 10001 app
RUN rm -rf /tmp/*

# Install Python
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 py3-pip && ln -sf python3 /usr/bin/python

WORKDIR /app

USER app

COPY package.json package.json
COPY package-lock.json package-lock.json

COPY --chown=app:app . /app

RUN npm ci --audit=false && rm -rf ~app/.npm /tmp/*

COPY .env-dist ./.env

ARG NEXT_PUBLIC_GA4_DEBUG_MODE
ENV NEXT_PUBLIC_GA4_DEBUG_MODE=false

ARG S3_BUCKET
ENV S3_BUCKET=$S3_BUCKET

RUN GLEAN_PYTHON=python GLEAN_PIP=pip npm run build

ARG SENTRY_RELEASE
ENV SENTRY_RELEASE=$SENTRY_RELEASE

CMD ["npm", "start"]
