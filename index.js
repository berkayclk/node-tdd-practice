const dotenv = require('dotenv');
dotenv.config(); // load .env file

const app = require('./src/app');
const { APP_PORT } = require('./src/constants/appConfig');

app.listen(APP_PORT, () => {
  console.log(`App is running on ${APP_PORT}`);
});
