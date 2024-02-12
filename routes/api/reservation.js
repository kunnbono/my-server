import express from "express";
import { routeWrapper } from "./routeWrapper.js";
import { getAllReservations } from "../../controllers/reservation/index.js";

const router = express.Router();

router.get("/all", routeWrapper(getAllReservations));

export default router;
