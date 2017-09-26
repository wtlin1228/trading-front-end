import React from 'react';

class WsQuoteAll extends React.Component {
    constructor() {
        super();
        this.state = {recvText: "", msg: []};
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

    wsReconnect() {
        console.log("wsReconnect");
        this.ws.close();
        this.ws = this.initWs();
    }

    componentDidMount() {
    }

    render() {
        let msgList = this.state.msg.map((m) => <div key={m.id}>{m.counter} {m.data}<br/></div>);
        return (
            <div>
                <p> ----- Realtime Quote ----- </p>
                {msgList}
                <p> -------------------------- </p>
            </div>
        )
    }
}

export default WsQuoteAll