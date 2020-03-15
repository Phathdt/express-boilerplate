FROM node:13-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN yarn install --only=production

EXPOSE 5000

CMD ["yarn", "start"]
