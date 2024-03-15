import React from "react";

function WarningBanner(props){
    if(!props.warning){
        return null;
    }
    return (
        <div>warn!</div>
    );
}

export default WarningBanner;