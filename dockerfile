# syntax=docker/dockerfile:1
FROM node:19-alpine
RUN apk add --no-cache g++ make
WORKDIR /
COPY . .
RUN npm install
CMD ["node", "index.js"]
EXPOSE 3001