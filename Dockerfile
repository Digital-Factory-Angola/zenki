# Dockerfile
FROM node:lts-alpine
# create destination directory
#RUN mkdir -p /usr/src/zenki
RUN mkdir -p /app
WORKDIR /app

# copy the app, note .dockerignore
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
COPY /dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
