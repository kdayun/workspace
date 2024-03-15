import React, {useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY=10;

function Accommodate(props){
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);
//컴포넌트 업데이트 시 호출
    useEffect(()=>{
        console.log("==================");
        console.log("useEffect is called");
        console.log(`isFull: ${isFull}`);
    });
//count값 변경 시 호출, 10일때에는 변경되지 않아 호출되지 않음
    useEffect(()=>{
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{padding:16}}>
            <p>{`총 ${count}명 수용.`}</p>
            <button onClick={increaseCount} disabled={isFull}>
                Enter
            </button>
            <button onClick={decreaseCount} disabled={count ? false: true}>Exit</button>
            {isFull && <p style={{color:"red"}}>정원이 가득찼습니다.</p>}
        </div>
    )
}

export default Accommodate;