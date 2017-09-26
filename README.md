# trading-web

## Install
``` bash
# Clone the repository
$ git clone https://github.com/Jerryg6j3/trading_web_standalone.git

# Go into the repository
$ cd trading_web_standalone

# Install dependencies
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$ sudo apt-get install -y nodejs
$ npm install -g webpack
$ npm insall -g yarn
$ npm install -g json-server
$ yarn install
```

# Install Docker for Mac
https://docs.docker.com/docker-for-mac/

# Install Docker for Ubuntu 16.04
```
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository "deb [arch=amd64] $ https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
$ sudo apt-get update
$ apt-cache policy docker-ce
$ sudo apt-get install -y docker-ce

$ sudo groupadd docker
$ sudo gpasswd -a $USER docker

$ pip install docker-compose
```
## Usage
```
# Webpack builds once and watches for changes to apply
$ webpack -w

# Start trading-web
$ yarn start

# Testing api server

# Docker
$ docker build -t trading-web .
$ docker run -it -p 8888:8888 trading-web
