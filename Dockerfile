FROM node:14.17-alpine

# Add glibc packages missing from Alpine to satisfy node-canvas, a @wdio dependency
# https://github.com/node-gfx/node-canvas-prebuilt/issues/77
RUN apk add --update --no-cache make g++ jpeg-dev cairo-dev pango-dev

RUN addgroup -g 10001 app && \
    adduser -D -G app -h /app -u 10001 app
RUN rm -rf /tmp/*

WORKDIR /app

USER app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci --audit=false && rm -rf ~app/.npm /tmp/*

COPY --chown=app:app . /app

RUN npm run build

CMD node server.js
