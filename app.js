const express = require('express');
const app = express();

const APP_PORT = process.env.APP_PORT || 8080;

app.listen(APP_PORT, () => {
  console.log(`App is running on ${APP_PORT}`);
});
