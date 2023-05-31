import 'dotenv/config'

import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function bootstrap() {
  console.log('env:', config)
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Connected to database successfully')

    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`)
    })
  } catch (error) {
    console.error('Error connecting to database', error)
  }
}
bootstrap()
