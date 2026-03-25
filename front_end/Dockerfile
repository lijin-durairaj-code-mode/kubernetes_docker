#base image
FROM node:20-alpine AS build
#root dir
WORKDIR /app
#copy
COPY ./package.json .
RUN npm install
COPY . .
# RUN npm run build

# FROM nginx:alpine 
# COPY --from=build /app/dist/front_end /usr/share/nginx/html

# #cmd
# EXPOSE 80
CMD ["npm","run","start","--","--host","0.0.0.0","--port","4200"]
