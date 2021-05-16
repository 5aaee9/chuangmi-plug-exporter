FROM node:15.14.0-alpine

EXPOSE 3000

WORKDIR /usr/src/app
COPY . .

ENTRYPOINT [ "yarn", "run" ]

CMD [ "start" ]
