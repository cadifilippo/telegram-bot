require('dotenv').config();

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const GOOGLE_CONFIG_FILENAME = process.env.GOOGLE_CONFIG_FILENAME;

module.exports = {
  TELEGRAM_TOKEN,
  GOOGLE_CONFIG_FILENAME,
};
