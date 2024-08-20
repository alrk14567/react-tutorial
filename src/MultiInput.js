import React, {useState, useRef} from "react";
import BorderBox from "./BorderBox";

function MultiInput() {
    let [inputs, setInputs] = useState({
        username:'',
        password:''
    })

    // 우리가 일반적으로 자바스크립트로 특정 DOM 객체를 찾을 때에는??
    // getElementById, querySelector
    // 리액트 상에서는 저러한 상황에서는 useRef()를 사용하게 된다.


    let passwordInput=useRef();

    let [message, setMessage] = useState('')
    // e는 이벤트의 약자
    let onChange = (e) => {
        //console.log(e.target.name+": "+ e.target.value);
        let {name, value}=e.target;
        setInputs({
            ...inputs,//기존의 값을 복사한 새로운 객체를 만드는 것과 똑같다. ... 은 스프레드 문법 객체 복사해서 새로운 객체를 만들거나 배열 복사해서 새로운 배열을 만들 때 사용
                //대괄호를 통한 접근        inputs.name == inputs[name]
            [name]: value
        })
    }

    let {username , password} = inputs

    let onClick = () => {

        if (username === password) {
            setMessage('로그인 성공')
        } else{
            setMessage('로그인 실패')
            setInputs({
                ...inputs,
                password: '',

            })
            passwordInput.current.focus()
        }
    }

    return(
        <BorderBox>
            <input placeholder='username' name='username' onChange={onChange} value={username}/>
            <input placeholder='password' type='password' name='password' onChange={onChange} ref={passwordInput} value={password}/>
            <button onClick={onClick}>로그인</button>
            <h1>{message}</h1>
        </BorderBox>
    )

}

export default MultiInput
