FROM node:14.17-alpine

ARG dev
RUN if [[ -n "$dev" ]] ; then \ 
    echo Adding glibc packages missing from Alpine to satisfy node-canvas, a @wdio dependency ; \
    apk add --update --no-cache make g++ jpeg-dev cairo-dev pango-dev ; \
fi

RUN addgroup -g 10001 app && \
    adduser -D -G app -h /app -u 10001 app
RUN rm -rf /tmp/*

WORKDIR /app

USER app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN if [[ -n "$dev" ]] ; then \
    echo Using npm ci to install production AND development dependencies. ; \
    npm ci && rm -rf ~app/.npm /tmp/* ; \
else \
    echo Installing production dependencies only ; \
    npm install --production && rm -rf ~app/.npm /tmp/* ; \
fi

COPY --chown=app:app . /app

RUN npm run build:all

CMD NODE_ICU_DATA=./node_modules/full-icu node server.js
