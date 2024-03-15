import React from "react";
import { useState } from "react";
/*
const fruits = [
    {id: "apple", value: "사과",},
    {id: "banana", value: "바나나",},
    {id: "grape", value: "포도",},
    {id: "melon", value: "멜론",},
    {id: "lemon", value: "레몬",},
];*/
function FruitSelect(props){
    const [value, setValue] = useState('grape');

    const handleChange=(event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event)=>{
        alert('선택한 과일: '+ value);
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                과일을 선택하세요:
                <select multiple={true} 
                    
                    value={[]} onChange={handleChange}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="melon">멜론</option>
                    <option value="lemon">레몬</option>
                </select>
            </label>
            <button type="sumbit">제출</button>

        </form>
    );
}

export default FruitSelect;