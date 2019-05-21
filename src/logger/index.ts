import Logger from 'bunyan'
import { LOG_LEVEL } from '../config'

let log: Logger

function createLogger() {
  if(!log) {
    log = Logger.createLogger({
      name: 'gymApp',
      level: LOG_LEVEL,
    })
  }

  return log
}

export default createLogger()