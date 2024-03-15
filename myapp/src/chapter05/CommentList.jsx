import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "호시",
        comment: "호랑해",
    },
    {
        name: "정한",
        comment: "하니해",
    },
    {
        name: "민규",
        comment: "규랑해",
    }
];
    

function CommentList(props){
    return (
        <div>
            {comments.map((comment)=>{
                return <Comment name={comment.name} comment={comment.comment}></Comment>
            })}
        </div>
    );
}

export default CommentList;