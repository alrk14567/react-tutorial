import React, {useState,useReducer} from "react";
import BorderBox from "./BorderBox";

function Counter() {
    //0번째 배열의 넘버가 변수가 됨
    //let numberState =useState(0);
    // 위에 넘버스테이트의 초기상태를 설명?? 해주는 친구들
   /* let [number,setNumber] = useState(0); //넘버값을 저장할 setter

    let onMinus = () =>{
        /!*console.log(-1)*!/
        setNumber(number => number-1);
        /!*console.log(number);*!/
    }
    let onPlus = () =>{
        // console.log('+1')
        setNumber(number+1)
        // console.log(number);
    }
    let initalize = () => {
        setNumber(number => 0)
    }*/
    let [number, dispatch] = useReducer(reducer, 0)

    let onMinus = () => {
        dispatch({type: 'MINUS'})
    }
    let onPlus = () => {
        dispatch({type: 'PLUS'})
    }
    let initalize = () => {
        dispatch({type: 'INITIALIZE'})
    }

    return(
        <BorderBox>

            <p>
                <button onClick={onMinus}>-1</button>
                <br/>
                {number}
                <br/>
                <button onClick={onPlus}>+1</button>

                <br/>
                <button onClick={initalize}>초기화</button>

            </p>

        </BorderBox>
    );
}
// useState 처럼 상태값을 나타내는 애는 Reducer 도 있다. 얘는 분리가 가능하다 이름은 다른거 해도 됨
function reducer(state,action) {
    switch (action.type) {
        case 'MINUS':
            return state -1;
        case 'PLUS':
            return state +1;
        case 'INITIALIZE' :
            return state =0;
        default:
            return state;


    }
}
// on으로 시작하는 애들은 이벤트 리스너로써 어떠한 입력을 할때 반응하는?? 친구들이다.
export default Counter;