import express from 'express'
import usersControllers from '../controllers/usersControlers.js'

const router = express.Router();

router
    .get('/users', usersControllers.listUsers)
    .get('/users/swagger.json', usersControllers.getSwagger)
    .post('/users', usersControllers.includeUsers)
    .delete('/users/:id', usersControllers.deleteUsers)

export default router;