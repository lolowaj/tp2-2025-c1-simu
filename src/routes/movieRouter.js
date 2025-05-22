import express from "express";
import { getAllMovies, getMovie, getAwardedMovies, getLanFilteredMovies, getOrderedMovies } from "../controllers/movieController.js";

const router = express.Router();
router.get("/", getAllMovies);
router.get("/id/:id", getMovie);
router.get("/awarded", getAwardedMovies);
router.get("/filtered/:lan", getLanFilteredMovies);
router.get("/ordered", getOrderedMovies);

export default router;