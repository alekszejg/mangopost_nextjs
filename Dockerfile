FROM node:18-alpine AS base

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY . .

RUN npm run build
