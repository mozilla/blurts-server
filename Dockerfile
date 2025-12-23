FROM node:20.19-alpine

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

COPY .env ./.env

ARG NEXT_PUBLIC_GA4_DEBUG_MODE
ENV NEXT_PUBLIC_GA4_DEBUG_MODE=false

ARG S3_BUCKET
ENV S3_BUCKET=$S3_BUCKET

ARG SENTRY_RELEASE
ENV SENTRY_RELEASE=$SENTRY_RELEASE

ARG NEXT_PUBLIC_SENTRY_DSN
ENV NEXT_PUBLIC_SENTRY_DSN=$NEXT_PUBLIC_SENTRY_DSN

ARG UPLOAD_SENTRY_SOURCEMAPS
ENV UPLOAD_SENTRY_SOURCEMAPS=$UPLOAD_SENTRY_SOURCEMAPS

ARG EMAIL_FROM
ENV EMAIL_FROM=$EMAIL_FROM

ARG SENTRY_DSN
ENV SENTRY_DSN=$SENTRY_DSN

RUN --mount=type=secret,id=SENTRY_AUTH_TOKEN,env=SENTRY_AUTH_TOKEN \
    --mount=type=secret,id=NEXTAUTH_SECRET,env=NEXTAUTH_SECRET \
    --mount=type=secret,id=HIBP_KANON_API_TOKEN,env=HIBP_KANON_API_TOKEN \
    GLEAN_PYTHON=python \
    GLEAN_PIP=pip \
    npm run build

CMD ["npm", "start"]
