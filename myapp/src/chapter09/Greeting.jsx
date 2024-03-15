import React from "react";
import UserGreeting from "./userGreeting";
import GuestGreeting from "./guestGreeting";

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    
    if(isLoggedIn){
        return <UserGreeting></UserGreeting>;
    }

    return <GuestGreeting></GuestGreeting>;
}

export default Greeting;