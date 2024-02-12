import express from "express";
import team from "./team.js";
import menu from "./menu.js";
import reservation from "./reservation.js";
import product from "./product.js";

const router = express.Router();

router.use("/team", team);
router.use("/menu", menu);
router.use("/reservation", reservation);
router.use("/product", product);

export default router;
