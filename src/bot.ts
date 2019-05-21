import TelegramBot from 'node-telegram-bot-api'
import logger from './logger'
import { BOT_TOKEN } from './config'

let bot: TelegramBot

function init(): TelegramBot {
  if(!bot) {
    if(!BOT_TOKEN) {
      logger.error('No BOT_TOKEN provided')
      process.exit(1);
    };
  
    // Create a bot that uses 'polling' to fetch new updates
    bot = new TelegramBot(BOT_TOKEN, {polling: {
      params: {
        timeout: 10,
      }
    }})
    bot.on('polling_error', (e) => {
      logger.error(e)
      process.exit(1)
    })
  }
  
  return bot
}

export default init()