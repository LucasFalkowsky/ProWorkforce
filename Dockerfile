# Dockerfile Next App

# base image
FROM node:alpine

# create & set working directory
RUN mkdir -p /app
WORKDIR /app

# Copy package.js and package-lock.json to the /app working directory
COPY package*.json /app

# install dependencies
RUN npm install

# copy source files
COPY . /app

# start app
EXPOSE 3000
CMD ["sh", "-c", "npm run dev & npm run storybook"]