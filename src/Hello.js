import React from 'react';
import BorderBox from "./BorderBox";

/*두개의 div를 인식 못함*/
function Hello() {
    return (
        <BorderBox>
            <div>
                <h1>나는 3학년~! 정기돈! 남42반 친구!</h1>
                <h1>춤 추고~ 랩하는 걸~ 좋아하는~ 친구!!</h1>
                <h1>네이버클~ 라우드십~ 3기의일~ 번째 랙트 컴포!!</h1>
            </div>
            <div>
                <h1>두번째 띠브입니다.</h1>
            </div>
        </BorderBox>
    );
}

export default Hello;