const express = require('express');

const app = express();
const port = 3000

const routes = require('./routes/');
const errorHandler = require('./middlewares/error-handler');

app.use(express.urlencoded({ extended: false }));
app.get(express.json());

app.use(errorHandler);
app.use('/', routes);

app.listen(port, ()=>console.log(`listening on port ${port}`))

module.exports = app;
