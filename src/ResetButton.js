import React, {useState} from "react";
import BorderBox from "./BorderBox"

function ResetButton() {
    let [text, setText] = useState('')
    let onChange = (event) => {

        setText(event.target.value)
    }
    let onClick = () => {
        setText('')
    }
    return (
        <BorderBox>
            <input type='text' onChange={onChange} value={text}/>
            <button onClick={onClick}>초기화</button>
            <h1>입력된 값: {text} </h1>
        </BorderBox>
    )
}

export default ResetButton
