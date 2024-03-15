import React from "react";

const students = [
    {id: 1, name: "Baekhyun",},
    {id: 2, name: "D.O.",},
    {id: 3, name: "Hoshi",},
    {id: 4, name: "Suho",}, 
];

function AttendanceBook(props){
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;

//key ={`student-id${student.id}`} -> 아이디로 key값 지정하기
//key ={index} -> 인덱스로 key값 지정하기