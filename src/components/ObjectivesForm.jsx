import React, { useState } from "react";
import "../stylesheets/ObjectivesForm.css";
import {v4 as uuidv4} from "uuid";


function ObjectivesForm(props){

    const [input, setInput] = useState("");

    const changeHandler = e => {
        setInput(e.target.value);
    }

    const shippingHandler = e => {
        e.preventDefault();


        const newObjective = {
            id: uuidv4(),
            text: input,
            completed: false
            
        }
        console.log(newObjective)


        props.onSubmit(newObjective);
    }

    return(

        <form 
        className="objective-form"
        onSubmit={shippingHandler}
        >

            <input 
                className="objective-input"
                type="text"
                placeholder="Escriba un objetivo"
                name="text"
                onChange={changeHandler}
            />
            <button className="objective-button">
                Agregar objetivo
            </button>

        </form>

    )


}

export default ObjectivesForm