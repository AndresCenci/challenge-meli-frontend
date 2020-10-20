const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const { config } = require('./config/index');
const meliApi = require('./routes/meliAPI.js');

meliApi(app);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
