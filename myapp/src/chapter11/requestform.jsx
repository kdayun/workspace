import React from "react";
import { useState } from "react";

function RequestForm(props){
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit=(event)=>{
        alert('입력한 요청사항: '+value);
        event.preventDefault();
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                요청사항: 
                <textarea 
                    value={value} 
                    placeholder="요청사항을 입력하세요."
                    onChange={handleChange}>
                </textarea>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default RequestForm;