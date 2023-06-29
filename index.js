const TelegramBot = require('node-telegram-bot-api');
const Config = require('./src/config');

const CommandController = require('./src/controllers/command');
const SpeechController = require('./src/controllers/speech');

const bot = new TelegramBot(Config.TELEGRAM_TOKEN, { polling: true });

CommandController(bot);
SpeechController(bot);
