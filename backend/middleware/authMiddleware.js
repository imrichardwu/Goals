import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

const protect = asyncHandler(async (req, res, next) => {
    let token;

    // Check if the request has the Authorization header and if it starts with "Bearer"
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            // Get the token from the Authorization header
            token = req.headers.authorization.split(" ")[1]; // Get the token from the Authorization header

            // Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Get user from the token
            req.user = await User.findById(decoded.id).select("-password");
            next(); // Call the next middleware
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    }
    // If there is no token
    if (!token) {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});

export {protect};
