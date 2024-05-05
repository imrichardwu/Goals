import {timeStamp} from "console";
import mongoose from "mongoose";

const goalSchema = mongoose.Schema({
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
