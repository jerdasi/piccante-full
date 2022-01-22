import express from 'express'

import { getAllUser, getUserById } from '../controllers/Users.js'

const router = express.Router();

// router.get('/', getAllUser)
router.get('/login', getUserById)

export default router