import {useParams} from "react-router-dom";
import BorderBox from "./BorderBox";

let Board2 = () => {
    let {id} = useParams()
    return(
        <BorderBox>
            <h1>{id}번 게시글</h1>
            <h2>{id}번 게시글 입니다.</h2>
        </BorderBox>
    )
}

export default Board2