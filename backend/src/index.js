import express from 'express';
import cors from 'cors';
import http from 'http';
import mongoose from 'mongoose';
import routes from './routes';
import { setupWebSocket } from './websocket';

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb://localhost:27017/omnistack', {
   useUnifiedTopology: true, useNewUrlParser: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);