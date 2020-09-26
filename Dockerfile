FROM node:latest

WORKDIR /home/node/app

COPY package*.json /home/node/app

RUN yarn install --non-interactive --network-timeout=30000