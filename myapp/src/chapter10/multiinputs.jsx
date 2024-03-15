import React, { useState } from "react";

function MultiInputs(props){
    const [inputs, setInputs] = useState(
        {
            Name: "",
            nickname: "",
        }
    );
    
    const {Name, nickname} = inputs;

    const onChange = (event) => {
        const {name, value} = event.target;
        setInputs({
            ...inputs, [name]:value,
        });
    };

    const onSubmit = (event) => {
        alert(`${Name}(${nickname})`);
        event.preventDefault();
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name = "Name"
                placeholder="write name"
                onChange={onChange}
                value={Name}></input>
            <input
                type="text"
                name = "nickname"
                placeholder="write nickname"
                onChange={onChange}
                value={nickname}></input>
            <button type="sumbit">enter</button>
        </form>
    )
}

export default MultiInputs;