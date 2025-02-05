import path from "path";
import express from "express";
import dotenv from "dotenv";
import errorHandler from "./middleware/errorMiddleware.js";
import goalRoutes from "./routes/goalRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
dotenv.config();
const port = process.env.PORT || 8000;

connectDB();

const app = express();

// This line of code adds a middleware function in Express.js that parses incoming request bodies as JSON.
// This means that if you send a POST request to the server with a JSON object, you can access this data in your route handlers using req.body.
app.use(express.json());

// This line of code adds a middleware function that parses incoming request bodies as URL-encoded data.
// This is the kind of data that browsers send when you submit a form. The "extended: true" option allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience.
app.use(express.urlencoded({extended: false}));

app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);

// serve frontend
if (process.env.NODE_ENV === "production") {
    app.use(
        express.static(path.join(path.join(__dirname, "..//frontend/build")))
    );

    app.get("*", (req, res) => {
        res.sendFile(
            path.resolve(__dirname, "..//frontend", "build", "index.html")
        );
    });
} else {
    app.get("/", (req, res) => {
        res.send("Please set to production mode");
    });
}

// This line of code adds a middleware function that catches any errors that occur during the request-response cycle.
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
