import React from "react";
import FancyBorder from "./fancyborder";

function WelcomeDialog(){
	return(
		<FancyBorder color="blue">
			<h1 className="Dialog-title">hello!</h1>
			<p className="Dialog-message">welcome to visit our site!</p>
	    </FancyBorder>
    );
}

export default WelcomeDialog;

