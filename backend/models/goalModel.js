import {timeStamp} from "console";
import mongoose from "mongoose";

const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, // This is a reference to the User model
        required: true,
        ref: "User", // This is the name of the model to which the reference is made
    },
    text: {
        type: String,
        required: [true, "Please add a text value"],
    },
    timeStamp: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("Goal", goalSchema);
