import React, {useState} from "react";
import WarningBanner from "./WarningBanner";

function Mainpage(props){
    const [showWarning, setShowWarning] = useState(false);
    const handleToglleClick = () => {
        setShowWarning(prevShowWarning => !prevShowWarning);
    }

    return (
        <div>
            <WarningBanner warning={showWarning}></WarningBanner>
            <button onClick={handleToglleClick}>
                {showWarning ? '감추기' : '보이기'}
            </button>
        </div>
    );
}

export default Mainpage;