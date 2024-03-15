import { useCallback, useState } from "react";
import "./TodoInsert.css";

const TodoInsert = ({onInsert}) =>{
    const [value, setValue] = useState("");
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSumbit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            e.preventDefault();
        }, [onInsert, value],
    );

    return(
        <form className="TodoInsert" onSubmit={onSumbit}>
            <input 
                value={value} 
                placeholder="할 일을 입력하세요"
                onChange={onChange}></input>
            <button type="submit">+</button>
        </form>
    );
}

export default TodoInsert;