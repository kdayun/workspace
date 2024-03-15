import React from "react";
import { useState } from "react";
import Logout from "./logoutbutton";
import Login from "./loginbutton";
import Greeting from "./Greeting";

function LoginControl(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick =() => {setIsLoggedIn(true);}
    const handleLogoutClick = () => {setIsLoggedIn(false);}

    let button;
    if(isLoggedIn){
        button = <Logout onClick={handleLogoutClick}></Logout>
    }
    else {
        button = <Login onClick={handleLoginClick}></Login>
    }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn}>
                {button}
            </Greeting>
        </div>
    );
}

export default LoginControl;