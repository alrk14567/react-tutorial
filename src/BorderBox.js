import React from "react";

function BorderBox(props) {
    let boxStyle={
        border: '2px dashed black',
        margin: '20px',
        padding: '15px'
    }

    return (
        <div style={boxStyle}>
            {props.children}
        </div>
    )
}

export default BorderBox;