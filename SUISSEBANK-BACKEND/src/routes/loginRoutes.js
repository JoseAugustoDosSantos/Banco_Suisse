import express from 'express'
import loginControllers from '../controllers/loginControllers.js'

const router = express.Router();

router
    .get('/logins', loginControllers.listLogins)
    
export default router;