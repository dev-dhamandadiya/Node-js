import { Router } from "express";
import adminController from "../controllers/adminController.js";

const router = Router();

// GET routes
router.get("/", adminController.homePages);
router.get("/addMovies", adminController.addMovies);
router.get("/view-movies", adminController.viewMovies);

// POST route
router.post("/addMovies", adminController.addMovies); // ✅ function, no parentheses

export default router;
