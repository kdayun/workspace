import React from "react";
import { useState } from "react";

function Signup(props){
    const [name, setName] = useState("");
    const [gender, setGender] = useState("g");

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    const handleSubmit = (event) => {
        alert(`name: ${name}, gender: ${gender}`);
        event.preventDefault();
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                name: 
                <input type="text" required 
                value={name} 
                onChange={handleChangeName}/>
            </label>
            <br></br>
            <label>
                gender:
                <select value={gender} required onChange={handleChangeGender}>
                    <option value="">gender</option>
                    <option value="man">man</option>
                    <option value="woman">woman</option>

                </select>
            </label>
            <button type="sumbit">done</button>
        </form>
    );
}

export default Signup;