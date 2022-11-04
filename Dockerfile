# Stage 1 - Build App
FROM node:current as build
WORKDIR /app
COPY package.json /app
RUN rm -rf node_modules
RUN yarn install
COPY . /app
RUN yarn build

# Stage 2 - Build on production environment
FROM nginx as app
ARG BUILD_DATE
ARG REVISION
ARG VERSION
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80