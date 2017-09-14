FROM node:8

MAINTAINER behappycc@hotmail.com

COPY . /home/trading-web
WORKDIR /home/trading-web

RUN npm install -g webpack
RUN npm install
RUN webpack

CMD ["/bin/bash", "run_server.sh"]