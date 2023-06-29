const fs = require('fs');
const path = require('path');
const speech = require('@google-cloud/speech');
const Config = require('../config');

const client = new speech.SpeechClient({
  keyFilename: `${path.join(__dirname, '../../')}/${Config.GOOGLE_CONFIG_FILENAME}`,
});

function SpeechController(bot) {
  bot.on('voice', async msg => {
    if (!msg.voice) {
      return;
    }

    bot.sendChatAction(msg.chat.id, 'typing');

    const filePath = await bot.downloadFile(
      msg.voice.file_id,
      path.join(__dirname + '../../../temp')
    );
    const file = fs.readFileSync(filePath);
    const audioBytes = file.toString('base64');

    const audio = {
      content: audioBytes,
    };
    const config = {
      encoding: 'OGG_OPUS',
      sampleRateHertz: 48000,
      languageCode: 'es-ES',
    };
    const request = {
      audio,
      config,
    };

    const [response] = await client.recognize(request);

    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');

    bot.sendMessage(msg.chat.id, transcription);

    fs.unlinkSync(filePath);
  });
}

module.exports = SpeechController;
