import cors from 'cors'
import express, { Application, Response } from 'express'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_req, res: Response) => {
  res.send('Hello World!')
})

export default app
