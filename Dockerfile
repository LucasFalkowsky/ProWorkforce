# Dockerfile Next App

# base image
FROM node:alpine

# create & set working directory
RUN mkdir -p /app
WORKDIR /app

# copy source files
COPY . /app

# Copy package.js, package-lock.json and prisma to the /app working directory
COPY package*.json /app
COPY prisma ./prisma/

# install dependencies
RUN npm install

COPY . .

# build app
RUN npm run build

EXPOSE 3000

# generate db
RUN npx prisma generate

# start app and storybook
CMD npm run dev
