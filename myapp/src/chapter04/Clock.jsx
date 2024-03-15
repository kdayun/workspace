import React, {useState, useEffect} from "react";

function Clock(props){
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date()); //date를 사용하면 초기값으로 설정되어 렌더링 시 변화 없음
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    
    return (
        <div>
            <h2>오늘 날짜: {new Date().toLocaleDateString()}</h2>
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;