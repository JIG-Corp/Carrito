
FROM node:alpine

WORKDIR /angular

ADD . /angular

RUN npm install -g @angular/cli

RUN npm install

EXPOSE 4200/tcp

CMD ["ng", "serve", "--host", "0.0.0.0"]