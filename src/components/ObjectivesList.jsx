import React, { useState } from "react";
import ObjectivesForm from "./ObjectivesForm";
import "../stylesheets/ObjectivesList.css"
import Objectives from "./objectives";

function ObjectivesList() {

    const [objectives, setobjectives] = useState([]);

    const saveObjective = objective => {

        if (objective.text.trim()){
            objective.text = objective.text.trim();
            const objectivesActualization = [objective, ...objectives];
            setobjectives(objectivesActualization);
        }
    }

    const deleteObjective = id => {
        const objectivesActualization = objectives.filter( objective => objective.id !== id);
        setobjectives(objectivesActualization);
    }


    const completedObjective = id => {
        const objectivesActualization = objectives.map(objective => {
            if (objective.id === id) {
                objective.completed = !objective.completed;
            }
            return objective;
        });
        setobjectives(objectivesActualization);
    }

    return(
        <>
        
        <ObjectivesForm onSubmit={saveObjective} />
        <div className="objectives-list-container">
           {
                objectives.map((objective) => 
                    <Objectives
                    key={objective.id}
                    id={objective.id}
                    text={objective.text}
                    completed={objective.completed}
                    completedObjective={completedObjective}
                    deleteObjective={deleteObjective}
                                      
                    />

                )
           }
        </div>
        
        </>

    );
}

export default ObjectivesList;