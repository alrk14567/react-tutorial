import React from "react";
import {useLocation, useSearchParams} from "react-router-dom";
import BorderBox from "./BorderBox";

function ShowGetParam() {
    // let params = useLocation()
    let [params, setParams] = useSearchParams()
    let id= parseInt(params.get('id'))
    let title=params.get('title')
    return (
        <BorderBox>
            <h2>겟으로 넘어온 값은? {params.search}</h2>   {/**/}
            <h3>id: {id}, id의 type: {typeof (id)}</h3>
            <h3>title: {title}, title의 type: {typeof (title)}</h3>
        </BorderBox>
    )
}


export default ShowGetParam;