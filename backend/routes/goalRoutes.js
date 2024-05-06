import express from "express";
import {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
} from "../controllers/goalController.js";
import {protect} from "../middleware/authMiddleware.js";
const router = express.Router();

// GET /api/goals
router.get("/", protect, getGoals);

// POST /api/goals
router.post("/", protect, setGoal);

// PUT
router.put("/:id", protect, updateGoal);

// DELETE
router.delete("/:id", protect, deleteGoal);

export default router;
