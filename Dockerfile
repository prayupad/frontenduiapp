FROM node:12 AS build

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build 

#################### Nginx Phase #####################

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/* && rm -rf /etc/nginx/nginx.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/blitzigo-sample-ui /usr/share/nginx/html
EXPOSE 80