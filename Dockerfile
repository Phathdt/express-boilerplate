FROM node:13-alpine as dependencies
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN yarn install
CMD ["yarn", "setup"]

FROM node:13-alpine AS release
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY --from=dependencies /usr/src/app/dist/ ./dist
COPY package* .
RUN yarn install --prod
EXPOSE 5000
CMD ["yarn", "start"]
