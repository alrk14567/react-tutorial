import React from "react";
import BorderBox from "./BorderBox"

function WriteBoard({title, content, nickname, onWrite, onChange}) {
    console.log('WriteBoard')
    return(
        <BorderBox>
            <input name="title" placeholder="제목" value={title} onChange={onChange}/> <br/>
            <input type="text" name="content" placeholder="내용" value={content} onChange={onChange}/> <br/>
            <input name="nickname" placeholder="작성자" value={nickname} onChange={onChange}/> <br/>
            <button onClick={onWrite}>작성하기</button>
        </BorderBox>
    )
}

export default React.memo(WriteBoard)