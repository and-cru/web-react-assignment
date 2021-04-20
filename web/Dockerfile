# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /usr/src/web

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/web/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.0 -g --silent

# add app
COPY . /usr/src/web/

# Expose port of web app
EXPOSE 3000