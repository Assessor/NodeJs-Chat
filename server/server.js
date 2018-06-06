const express = require('express');
const path = require('path');
const socket = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, '../public');
const port = process.env.port || 3000;

const app = express();
const server = http.createServer(app);
const io = socket(server);

app.use(express.static(publicPath));
server.listen(port, () => {
    console.log('Has server starten...')
});

io.on('connection', () => {
    console.log('Server socket connected!');
})

