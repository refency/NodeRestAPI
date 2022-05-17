FROM node:16
WORKDIR /usr/server/app
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 8000
CMD ["node","./server/server.js"]
