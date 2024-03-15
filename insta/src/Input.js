const styles={
    wrapper: {
        margin: "10px"
    },
    contentBox: {
        width: "250px",
        height: "23px",
        background: "rgb(250,250,250)", 
        border: "rgb(219,219,219) 1px solid",
        padding: "5px"
    }
};


function InputInfo(props) {
    return(
        <div style={styles.wrapper}>
            <input type="text" placeholder={props.name} style={styles.contentBox}/>
        </div>
        
    )
    
}

export default InputInfo;