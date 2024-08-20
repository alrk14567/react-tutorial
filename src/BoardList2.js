import {Link, NavLink, Outlet} from "react-router-dom";

let BoardList2 = () => {
    let style = {
        fontStyle: 'italic',
        fontSize: 'large'
    }
    return(
        <>
            {/*아웃렉 부분에 서브 루트의 내용이 들어가게된다.
            왜냐 div태그는 두개가 안되니까*/}
            <Outlet/>
            <ol>
                <li>
                    <NavLink to={"/board/1"}
                        style={({isActive})=>isActive ? style:undefined}>
                        1번 게시글
                    </NavLink>
                    {/*<Link to="/board/1">1번 게시글</Link>*/}
                </li>
                <li>
                    <NavLink to={"/board/2"}
                             style={({isActive})=>isActive ? style:undefined}>
                        2번 게시글
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/board/3"}
                             style={({isActive})=>isActive ? style:undefined}>
                        3번 게시글
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/board/4"}
                             style={({isActive})=>isActive ? style:undefined}>
                        4번 게시글
                    </NavLink>
                </li>
            </ol>
        </>

    )
}


export default BoardList2