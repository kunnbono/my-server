import express from 'express';
import team from './team.js';
import menu from './menu.js';

const router = express.Router();

router.use('/team', team);
router.use('/menu', menu);


export default router;