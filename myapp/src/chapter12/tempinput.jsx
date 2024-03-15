const scaleNames = {
    c: "섭씨",
    f: "화씨",
};

function TempInput(props){

    const handleChange = (event) => {
        props.onTempChange(event.target.value);
    };

    return (
        <fieldset>
            <legend>
                온도 입력(단위: {scaleNames[props.scale]}):
            </legend>
            <input value={props.temp} onChange={handleChange}></input>
        </fieldset>
    );
}

export default TempInput;