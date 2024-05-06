import asyncHandler from "express-async-handler";
import Goal from "../models/goalModel.js";
import User from "../models/userModel.js";
// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({user: req.user.id});
    res.status(200).json(goals);
});

// @desc Set goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
    // Check if the request body contains a text field
    if (!req.body.text) {
        res.status(400);
        throw new Error("Please enter a goal");
    }
    const goal = await Goal.create({text: req.body.text, user: req.user.id});
    res.status(201).json(goal);
});

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(404);
        throw new Error("Goal not found");
    }

    // Check if the user is the owner of the goal
    if (!req.user) {
        res.status(404);
        throw new Error("User not found");
    }

    if (goal.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("Not authorized");
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(updatedGoal);
});

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(404);
        throw new Error("Goal not found");
    }

    if (!req.user) {
        res.status(404);
        throw new Error("User not found");
    }

    if (goal.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("Not authorized");
    }

    await goal.deleteOne();
    res.status(200).json({id: req.params.id});
});

export {getGoals, setGoal, updateGoal, deleteGoal};
