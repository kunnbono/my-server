import express from "express";
import { routeWrapper } from "./routeWrapper.js";
import { getMenuInfo } from "../../controllers/menu/index.js";

const router = express.Router();

router.get("/structure", routeWrapper(getMenuInfo));

export default router;
