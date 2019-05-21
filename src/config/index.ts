import { LogLevel } from 'bunyan'

const { env } = process;

export enum NodeEnv {
  production = 'production',
  development = 'development',
  staging = 'staging',
}

const logLevelsMap = {
  [NodeEnv.production] : 'warn',
  [NodeEnv.development]: 'info',
  [NodeEnv.staging]: 'info',
}

export const NODE_ENV = env.NODE_ENV || NodeEnv.development
export const BOT_TOKEN = env.BOT_TOKEN || ''
export const DEBUG = env.NODE_ENV !== NodeEnv.production
export const LOG_LEVEL: LogLevel = env.LOG_LEVEL || logLevelsMap[NODE_ENV]