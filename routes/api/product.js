import express from "express";
import { routeWrapper } from "./routeWrapper.js";
import {
  getAllCharges,
  getAllAssignments,
} from "../../controllers/product/index.js";

const router = express.Router();

router.get("/all_assignments", routeWrapper(getAllAssignments));
router.get("/all_charges", routeWrapper(getAllCharges));

export default router;
