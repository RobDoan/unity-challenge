FROM node:16.13.0-alpine as appBuilder

RUN mkdir -p /app
COPY yarn.lock package.json /app/

RUN yarn install  --pure-lockfile --cwd /app
WORKDIR /app

COPY . .
RUN yarn build
CMD ["yarn", "start"]


FROM nginx:stable-alpine

COPY --from=appBuilder /app/build/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/shared_api_proxy.conf /etc/nginx/shared_api_proxy.conf
