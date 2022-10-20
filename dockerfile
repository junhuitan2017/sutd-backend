# syntax=docker/dockerfile:1
FROM node:19-alpine
WORKDIR /
COPY . .
RUN npm install
CMD ["node", "index.js"]
EXPOSE 3001