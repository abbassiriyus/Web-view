const TelegramBot = require('node-telegram-bot-api');
const token = '6492572397:AAGmkt8yP7NrFhGwnUUJyxFwhlCcF1878Rs';
const bot = new TelegramBot(token, {polling: true});
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Kun.uz sahifasini ochish uchun bosing:', {
      reply_markup: {
        inline_keyboard: [[{ text: 'Kun.uz', url: 'https://kun.uz' }]]
      }
    });
    bot.on('callback_query', (query) => {
        const chatId = query.message.chat.id;
        bot.sendMessage(chatId, '<a href="https://kun.uz">Kun.uz</a>', {
          parse_mode: 'HTML',
          disable_web_page_preview: false
        });
      });
  });