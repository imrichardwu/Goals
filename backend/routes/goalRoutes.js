import express from "express";
import {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
} from "../controllers/goalController.js";
const router = express.Router();

// GET /api/goals
router.get("/", getGoals);

// POST /api/goals
router.post("/", setGoal);

// PUT
router.put("/:id", updateGoal);

// DELETE
router.delete("/:id", deleteGoal);

export default router;
