FROM node:12-alpine as builder
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --only=prod
COPY . /app

RUN npm run build

FROM nginx:1.15

ENV REACT_APP_LOAD_IMG_URI="http://10.0.2.15:4000/load?id="
ENV REACT_APP_SWIPE_URI="http://10.0.2.15:4000/swipe?direction="
ENV REACT_APP_UPDATE_EXTENSIONS_URI="http://10.0.2.15:4000/switch_extension"
ENV REACT_APP_DELETE_OBJ_URI="http://10.0.2.15:4000/delete"
ENV REACT_APP_SAVE_URI="http://10.0.2.15:4000/upload"
ENV REACT_APP_UPDATE_RATING_URI="http://10.0.2.15:4000/update_rating"

COPY --from=builder /app/build/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY nginx_config/twinkle.conf /etc/nginx/conf.d/twinkle.conf
