import express from 'express'
import usersControllers from '../controllers/usersControlers.js'

const router = express.Router();

router
    .get('/users', usersControllers.listUsers)
    .post('/users', usersControllers.includeUsers)
    .delete('/users/:id', usersControllers.deleteUsers)

export default router;