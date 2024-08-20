import React from "react";
import BorderBox from "./BorderBox";

function Header({name='게스트',age=-1}) {
    const HeaderStyle= {
        backgroundColor: 'beige',
        fontSize: 'large',
        color: 'orange'
    }
    //console.log(age)
    //const name ='정기돈'
    // 이것은 주석입니다.


    return (
        // 이것은 주석입니다.
        <BorderBox>
        <div style={HeaderStyle} className="AAA">

            요키야의 돈까스규동 맛있다!
            반갑습니다 {name}님!!!
        </div>
        </BorderBox>
    );
}

export default Header;