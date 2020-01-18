import socketio from 'socket.io-client';

const socket = socketio('http://10.0.2.2:3333', {
  autoConnect: false,
});

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude, longitude, techs
  };

  socket.connect();
}

function disconnect() {
  if (socket.connect) {
    socket.disconnect();
  }
}

function subscribeToNewDevs(subscribeFunction) {
  socket.on('new-dev', subscribeFunction);
}

export { connect, disconnect, subscribeToNewDevs };