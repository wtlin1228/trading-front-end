import React from 'react';

class WsQuote extends React.Component {
    constructor() {
        super();
        this.state = {recvText: "", msg: []};
        this.msgCounter = 0;
        this.displayMsgLength = 5;
        this.ws = this.init_ws("ws://www.surprice3c.com:8000/prices");
    }

    init_ws(ws_api) {
        let socket = new WebSocket(ws_api);

        socket.onopen = function () {
            console.log("prices ws.onopen()")
        };
        socket.onmessage = this.ws_onmessage.bind(this);
        socket.onclose = function () {
            console.log("ws.onclose");
            this.ws_reconnect();
        }.bind(this);
        return socket;
    }

    ws_onmessage(event) {
        let msg = this.state.msg;
        let tp = {counter: this.msgCounter, data: event.data};
        if (msg.length < this.displayMsgLength) {
            msg.push(tp);
        } else {
            let i = this.msgCounter % this.displayMsgLength;
            msg[i] = tp;
        }
        this.msgCounter += 1;
        this.setState({msg: msg});
    }

    ws_reconnect() {
        console.log("ws_reconnect");
        this.ws.close();
        this.ws = this.init_ws();
    }

    componentDidMount() {
    }

    render() {
        let msgList = this.state.msg.map((m) => <div>{m.counter} {m.data}<br/></div>);
        return (
            <div>
                <p> ----- Realtime Quote ----- </p>
                {msgList}
                <p> -------------------------- </p>
            </div>
        )
    }
}

export default WsQuote
