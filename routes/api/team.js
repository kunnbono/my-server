import express from 'express';
import {getTeamInfo} from '../../controllers/team/index.js';
import { routeWrapper } from './routeWrapper.js';

const router = express.Router();

router.get('/info', routeWrapper(getTeamInfo));

export default router;