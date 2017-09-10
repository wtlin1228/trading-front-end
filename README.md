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
$ npm install -g webpack@1.15.0
npm install -g json-server
$ npm install
```

## Usage
```
# Webpack builds once and watches for changes to apply
$ webpack -w

# Start trading-web
$ npm start

# Testing api server
