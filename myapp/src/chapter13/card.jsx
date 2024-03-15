import React from "react";

function Card(props){
    const {title, name, backgroundColor, children} = props;

    return (
            <div style={{
            margin: 8,
            padding: 8,
            borderRadius: 8,
            boxShadow: "0px 0px 4px grey",
            backgroundColor: backgroundColor || "white",
        }}>
            {title && <h1>{title}</h1>}
            {<i>안녕하세요 {name}입니다.</i>}
            {<h4>{children}</h4>}
        </div>
        
        
    );
}

export default Card;