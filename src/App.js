import React, {useCallback, useMemo, useReducer, useRef} from "react";
import './App.css';
import {Link, Route, Routes} from "react-router-dom";

import Hello from "./Hello";
import Hello2 from "./Hello2";
import ShowGetParam from "./showGetParm";
import BoardList2 from "./BoardList2";
import Board2 from "./Board2";
import NotFound from "./NotFound";

// 훅 함수: 컴포넌트가 시작되거나 끝나거나 무언갈 감지하여 그거에 대한 처리를 해주는 아이들 ( useMemo, useCallback 등등등)
// createContext를 통해 외부에서도 reducer에 접근할 수 있도록 등록함
function countRead(boards) {
    return boards.filter(b => b.active).length;
}

let initialState = {
    inputs: {
        title: '',
        content: '',
        nickname: ''
    },
    boardArray: [
        {
            id: 1,
            title: 'heyheyhey!!~~',
            content: '졸려요 선생님',
            nickname: '학생',
            active: false
        },
        {
            id: 2,
            title: '지금은 우리가',
            content: '낮잠을 잘시간~',
            nickname: '신생아',
            active: false
        }
    ]
}

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            }
        case 'WRITE_BOARD':
            return {
                inputs: initialState.inputs,
                boardArray: state.boardArray.concat(action.board)
            }
        case 'TOGGLE_TITLE':
            return {
                ...state,
                boardArray: state.boardArray.map(b =>
                    b.id === action.id ? {...b, active: !b.active} : b
                )
            }
        case 'DELETE_BOARD':
            return {
                ...state,
                boardArray: state.boardArray.filter(b => b.id !== action.id)
            }
        default:
            return state;
    }
}

export let BoardDispatch = React.createContext(null)

function App() {
    /* 1차 주석
    let [boards, setBoards] = useState([
        {
            id: 1,
            title: '집에 가고 싶다',
            content: '집에 가고 싶다 엉엉',
            nickname: '학생',
            active: true
        },
        {
            id: 2,
            title: '집에 가고 싶다',
            content: '장마가 싫다',
            nickname: '학생2',
            active: false
        },
        {
            id: 3,
            title: '집에 가고 싶다.',
            content: '더위도 싫다',
            nickname: '레츠고',
            active: false
        },
        {
            id: 4,
            title: '천방지축',
            content: '얼렁뚱땅',
            nickname: '앞뒤짱구',
            active: false
        }
    ])

    let [inputs, setInputs] = useState({
        title: '',
        content: '',
        nickname: ''
    })

    let {title, content, nickname} = inputs

    let nextId = useRef(5)

    // input에 글씨가 써지는 지 감지해주는 애
    // useCallback 끝에 배열에는 자기가 사용하는 스테이트값의 변수를 넣어주어야 함
    let onChange = useCallback((e) => {
        console.log('onChange')
        let {name, value} = e.target
        setInputs(inputs => ({
            ...inputs,
            [name]: value
        }))
    }, [])

    let onWrite = useCallback(() => {

        //board 객체를 만드는 부분
        let board = {
            id: nextId.current,
            title,
            content,
            nickname
        }
        // concat은 이어붙이는 애들
        setBoards(boards => boards.concat(board))

        setInputs({
            title: '',
            content: '',
            nickname: ''
        })
        nextId.current += 1;
    }, [title, content, nickname])

    let onDelete = useCallback((id) => {
        setBoards(boards => boards.filter(board => board.id !== id))
    }, [])

    // 삼항 연산자
    // 조건식 ? true 일때 : false일때

    let onToggle = useCallback((id) => {
        setBoards( boards =>
            boards.map(board => board.id === id ? {...board, active: !board.active} : board
            )
        )
    }, [])

    // 한번 연산한 값을 따로 관리하는 친구 (항상 컴포넌트에서 실행이 됨
    let count = useMemo(()=> countRead(boards),[boards])*/


    let [state, dispatch] = useReducer(reducer, initialState)
    let nextId = useRef(3)
    let {title, content, nickname} = state.inputs
    let {boardArray} = state;


    let onChange = useCallback(e => {
        let {name, value} = e.target
        dispatch({
            type: 'CHANGE_INPUT',
            name,
            value
        })
    }, [])

    let onWrite = useCallback(() => {

        dispatch({
            type: 'WRITE_BOARD',
            board: {
                id: nextId.current,
                title,
                content,
                nickname
            }
        })

        nextId.current += 1
    }, [title, content, nickname])

    let onToggle = useCallback((id) => {
        dispatch({
            type: 'TOGGLE_TITLE',
            id
        })
    }, [])
    let onDelete = useCallback((id) => {
        dispatch({
            type: 'DELETE_BOARD',
            id
        })
    }, [])

    let count = useMemo(() => countRead(boardArray), [boardArray])
    //Provider는 이 안의 있는 컴포넌트들이 boarddispatch에 접근할 수 있도록

    return (
        <BoardDispatch.Provider value={dispatch}>
            <div className="App">
                {/*이안에서만 바꿔줘라고 해준것*/}
                <Routes>
                    <Route path="/" element={<Hello/>}/>
                    {/*Component={Hello} 위엔 element 아래는 컴포넌트 대체*/}
                    <Route path="/hello2/:name" element={<Hello2/>}/>
                    <Route path="/get" element={<ShowGetParam/>}/>
                    <Route path="/board" element={<BoardList2/>}>
                        <Route path={":id"} element={<Board2/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                    {/*<Route path={"/board/:id"} element={<Board2/>}/>*/}
                </Routes>
                {/*링크를 씀으로 새로고침은 막고 주소값만 변경*/}
                <Link to={"/hello2/정기돈"}>Hello2로</Link>
                <br/>
                <Link to={"hello2/고윤정"}>Hello2로</Link>
                <br/>
                <Link to={"hello2/  "}>Hello2로(잘못된 링크)</Link>
                <br/>
                <Link to={"/board"}>게시판 목록으로</Link>


            </div>
        </BoardDispatch.Provider>

    );
}

export default App;
