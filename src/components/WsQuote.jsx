import React from 'react';

class WsQuote extends React.Component {
    constructor() {
        super();
        this.state = {recvText: "", msg: []};
        this.msg_counter = 0;
        this.msg_size = 5;
        this.ws2 = this.init_ws2("ws://www.surprice3c.com:8000/prices");
    }

    ws_onmessage(event) {
        var newMsg = this.state.msg;
        var tp = {counter: this.msg_counter, data:event.data};
        if (this.state.msg.length < this.msg_size) {
            newMsg.push(tp);
        } else {
            var i = this.msg_counter % this.msg_size;
            newMsg[i] = tp;
        }
        this.msg_counter += 1;
        this.setState({msg: newMsg});
    }

    init_ws2(ws_api) {
        var socket = new WebSocket(ws_api);

        socket.onopen = function () {
            console.log("prices ws.onopen()")
        };
        socket.onmessage = this.ws_onmessage.bind(this);
        socket.onclose = function () {
            console.log("ws2.onclose");
        };
        return socket;
    }

    ws2_reconnect() {
        console.log("ws2_reconnect");
        ws2.close();
        ws2 = init_ws2();
    }

    componentDidMount() {
    }

    render() {
        let msgList = this.state.msg.map((m) => <div>{m.counter} {m.data}<br/></div>);
        return (
            <div>{msgList}</div>

        )
    }
}

export default WsQuote