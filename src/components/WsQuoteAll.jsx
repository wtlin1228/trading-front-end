import React from 'react';

class WsQuoteAll extends React.Component {
  constructor() {
    super();
    this.state = {recvText: "", msgList: []};
    this.msgCounter = 0;
    this.displayMsgLength = 5;
    this.ws = this.initWs("ws://www.surprice3c.com:8000/prices");
  }

  initWs(ws_api) {
    let socket = new WebSocket(ws_api);

    socket.onopen = function () {
      console.log("prices ws.onopen()")
    };
    socket.onmessage = this.wsOnMessage.bind(this);
    socket.onclose = function () {
      console.log("ws.onclose");
      this.wsReconnect();
    }.bind(this);
    return socket;
  }

  wsOnMessage(event) {
    let msgList = this.state.msgList;
    this.msgCounter += 1;
    let data = {counter: this.msgCounter, data: event.data};
    if (msgList.length >= this.displayMsgLength) {
      msgList.shift();
    }
    msgList.push(data);
    this.setState({msgList: msgList});
  }

  wsReconnect() {
    console.log("wsReconnect");
    this.ws.close();
    this.ws = this.initWs();
  }

  componentDidMount() {
  }

  render() {
    let msgListFlatten = "Waiting price updates ...";
    if (this.state.msgList.length > 0) {
      msgListFlatten = this.state.msgList.map((m) =>
        <div key={m.counter.toString()}>
          {m.counter} {m.data}<br/>
        </div>);
    }

    return (
      <div>
        <p> ----- Realtime Quote ----- </p>
        {msgListFlatten}
        <p> -------------------------- </p>
      </div>
    )
  }
}

export default WsQuoteAll
