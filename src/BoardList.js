import React, {useEffect,useContext} from "react";
import BorderBox from "./BorderBox"
import {BoardDispatch} from "./App"

let Board = React.memo(

    function Board({board}) {
        let dispatch = useContext(BoardDispatch)    //새터 느낌??

        // useEfeect는 생성, 수정, 삭제의 상태를 감지해준다. 따라서 이펙트는 생성시 나타남이 뜨고 return()은 지금 소멸할때만 작업을 진행한다. deps가 비어있으면 소멸만 감시
        useEffect(() => {
            console.log('Board 컴포넌트에 셋팅됨')

            return () => {
                console.log('Board 컴포넌트가 언마운트됨')

            }
        }, [])
        return (
            <BorderBox>
                <BorderBox>
                    <p>글번호: {board.id}</p>
                    <p style={{
                        cursor: 'pointer',
                        backgroundColor: board.active ? 'skyblue' : 'beige'
                    }} onClick={() => {
                        dispatch({type:'TOGGLE_TITLE',id: board.id})
                    }}>제목: {board.title}</p>
                    <p>작성자: {board.nickname}</p>
                    <p>내용: {board.content}</p>
                </BorderBox>
                <button onClick={() => {
                    dispatch({type:'DELETE_BOARD',id:board.id})
                }}>삭제하기</button>
            </BorderBox>
        )
    }
)


// 자바스크립트 배열의 map 함수


function BoardList({boardArray}) {
    return (
        <BorderBox>
            {boardArray.map((b) => (
                <Board board={b} key={b.id}/>
            ))}
        </BorderBox>
    )
}

export default React.memo(BoardList)