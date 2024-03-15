import React from "react";
import { useState } from "react";

function Reservation(props){
    const [haveBreakfast, setHaveBreakfast] = useState(false);
    const [numberOfGuest, setNumberOfGuest] = useState(2);

    const handleSubmit = (event) => {
        alert(`아침식사 여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}`);
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                아침식사 여부:
                <input 
                    type="checkbox"
                    checked={haveBreakfast}
                    onChange={(event)=>{
                        setHaveBreakfast(event.target.checked);
                    }}/>
            </label>
            <br/>
            <label>
                방문객 수:
                <input 
                    type="number"
                    value={numberOfGuest}
                    min="2"
                    max="10"
                    onChange={(event)=>{
                        setNumberOfGuest(event.target.value);
                    }}/>
            </label>
        <button type="sumbit">제출</button>
        </form>
    );
}
export default Reservation;