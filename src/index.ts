import { app } from './app'
import { logger } from './logger'
import dotenv from 'dotenv'
dotenv.config()
const port = Number(process.env.PORT || 4000);
const host = process.env.HOST || 'localhost'

process.on('unhandledRejection', (reason) => logger.error('Unhandled Rejection %O', reason))

app.listen(port).then(() => {
  logger.info(`Feathers app listening on http://${host}:${port}/echo`)
})
