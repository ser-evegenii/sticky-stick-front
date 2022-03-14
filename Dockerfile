FROM node:12-alpine as builder
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --only=prod
COPY . /app

RUN npm run build

FROM nginx:1.15

ENV REACT_APP_LOAD_IMG_URI="lalka-halalka"

COPY --from=builder /app/build/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY nginx_config/twinkle.conf /etc/nginx/conf.d/twinkle.conf
