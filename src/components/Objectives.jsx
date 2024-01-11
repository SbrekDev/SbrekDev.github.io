import React from "react";
import "../stylesheets/Objectives.css";
import { AiOutlineCloseCircle} from "react-icons/ai"
function Objectives({ id, text, completed, completedObjective, deleteObjective }){
 
    return (
        <div className={completed ? "objective-container completed" : "objective-container"}>
            <div 
            className="objective-text"
            onClick={() => completedObjective(id)}>
                {text}
            </div>
            <div className="objective-container-icons"
            onClick={() => deleteObjective(id)}
            >
            <AiOutlineCloseCircle className="objective-icon"/>
            </div>
        </div>
    );

}

export default Objectives;