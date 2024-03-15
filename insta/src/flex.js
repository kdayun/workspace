import "./flex.css";


function Flex(){

    return(
        <div>
            <p className="firstline">퍼스트 라인 그리고 퍼스트 레터
            퍼스트 라인 그리고 퍼스트 레터
            퍼스트 라인 그리고 퍼스트 레터
            퍼스트 라인 그리고 퍼스트 레터
            퍼스트 라인 그리고 퍼스트 레터
            </p>
            <ul>
                <li>강아지</li>
                <li>고양이</li>
                <li>호랑이</li>
                <li>햄스터</li>
            </ul>
            <input type="text" placeholder="아무거나"></input>

            <p className="add">원래 쓰여 있던 내용</p>
            
        </div>
    );
}

export default Flex;