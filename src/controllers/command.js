function CommandController(bot) {
  bot.onText(/\/start/, msg => {
    console.log(msg);
    bot.sendMessage(msg.chat.id, '¡Hola! Soy tu bot favorito :)');
  });

  bot.onText(/\/poll/, msg => {
    bot
      .sendPoll(msg.chat.id, '¿Cuál es tu color favorito?', ['Rojo', 'Verde', 'Azul'])
      .then(() => {
        bot.sendMessage(msg.chat.id, 'He creado la encuesta para ti');
      })
      .catch(err => console.log(err));
  });

  bot.on('message', msg => {
    console.log(msg);
  });
}

module.exports = CommandController;
