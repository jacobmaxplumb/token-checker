FROM node:12.18.3

LABEL version="1.0"
LABEL description="This is the auth backend server to validate tokens"

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "server.js"]