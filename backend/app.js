require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const cors = require('cors');

const { PORT = 3000, BD_URL = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;
const app = express();
const helmet = require('helmet');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const hadleErrors = require('./middlewares/errors');
const routes = require('./routes');
const NotFoundError = require('./errors/not-found-err');

mongoose.connect(BD_URL, {
  useNewUrlParser: true,
});
app.use(cors({ origin: ['http://localhost:3001', 'http://shinoinochi.mesto.nomoreparties.co', 'https://shinoinochi.mesto.nomoreparties.co'] }));
app.use(requestLogger);
app.use(helmet());
app.use(express.json());
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
app.use(routes);
app.use(errorLogger);
app.use(errors());
app.use('*', () => {
  throw new NotFoundError('Здесь ничего нет');
});
app.use(hadleErrors);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
