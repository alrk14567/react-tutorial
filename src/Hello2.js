import React from "react";
import BorderBox from "./BorderBox";
import {Link, useParams} from "react-router-dom";

function Hello2() {
    let parameters=useParams()
    let name=parameters.name
    return (
        <BorderBox>
            <h1>여기는 hello2 컴포넌트 입니다.</h1>
            <h2>{name}님 반값습니다!</h2>
            <Link to={"/"}>인덱스로</Link>
        </BorderBox>
    )
}

export default Hello2