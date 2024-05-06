import {useDispatch} from "react-redux";
import {deleteGoal} from "../features/goals/goalSlice";

function GoalItem({goal}) {
    const dispatch = useDispatch();

    return (
        <div className="goal">
            <div>
                {new Date(goal.timeStamp).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                })}
            </div>
            <h2>{goal.text}</h2>
            <button
                className="close"
                onClick={() => dispatch(deleteGoal(goal._id))}
            >
                X
            </button>
        </div>
    );
}

export default GoalItem;
