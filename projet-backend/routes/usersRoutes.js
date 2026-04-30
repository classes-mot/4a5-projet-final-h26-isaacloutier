import express from 'express';

import usersController from '../controllers/usersController.js';
const router = express.Router();

router.post('/login', usersController.login);

export default router;
