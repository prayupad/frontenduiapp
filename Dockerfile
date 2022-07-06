FROM node:12 AS build

RUN mkdir -p /app

WORKDIR /app

#COPY ./package.json /app



COPY . /app

RUN npm install

#RUN ng build

RUN npm run build 

RUN pwd

RUN ls -lrt

RUN ls -lrt /app/dist/blitzigo-sample-ui

FROM nginx:latest

#RUN ls -lrt /app/dist/blitzigo-sample-ui

COPY --from=build /app/dist/blitzigo-sample-ui /usr/share/nginx/html


#RUN npm run build --prod

#ENV PORT=80

EXPOSE 80