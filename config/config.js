// config/config.js
require('dotenv').config();

module.exports = {
  apiBaseUrl: process.env.API_BASE_URL,
  apiToken: process.env.API_TOKEN,
  port: process.env.PORT || 3000,
};
