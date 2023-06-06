import cors from 'cors'
import express, { Application, Response } from 'express'
import usersRouter from './app/modules/users/users.route'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application routes
app.use('/api/v1/users', usersRouter)
app.get('/', (_req, res: Response) => {
  res.send('Hello World!')
})

export default app
