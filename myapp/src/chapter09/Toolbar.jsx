import React from "react";

const styles = {
    wrapper:{
        pading:16,
        display:"flex",
        flexDirection:"row",
        borderBottom:"1px solid grey",
    },
    greeting:{
        marginRight:8,
    },
};

function Toolbar(props){
    const {isLoggedIn, onClickLogin, onClickLogout} = props;

    return (
        <div style={styles.wrapper}>
            {isLoggedIn && <span style={styles.greeting}>Welcome!</span>}
            {isLoggedIn ? (<button onClick={onClickLogout}>logout</button>)
            : (<button onClick={onClickLogin}>login</button>)}
            
        </div>
    );
}

export default Toolbar;