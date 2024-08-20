import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from "./Header";
import reportWebVitals from './reportWebVitals';
import Counter from './Counter'
import {BrowserRouter} from "react-router-dom";

/*root라는 id를 가진 곳은 App/ 을 리턴해라~*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);




/*/!*header라는 id를 가진곳에는 Header을 불러와서 리턴해라*!/
const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(
    <React.StrictMode>
        <Header name="정기돈" age={13}/> {/!*name를 보내면 내가 설정한 name으로 가는게 아니라 객체로 포장해서 보냄 객체의 이름은 props가 된다. 그안에 name가 저장*!/}
    </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
