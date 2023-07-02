import 'dotenv/config'

import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, infoLogger } from './shared/logger'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    infoLogger.info('Connected to database successfully')

    app.listen(config.port, () => {
      infoLogger.info(`Application listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('Error connecting to database', error)
  }
}
bootstrap()
