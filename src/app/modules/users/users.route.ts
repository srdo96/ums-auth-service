import express from 'express'
import usersController from './users.controller'
const route = express.Router()
route.post('/create-user', usersController.createUser)

export default route
