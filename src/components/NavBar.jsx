import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logOutAndClearStorage } from "../redux/modules/authSlice";
import { useState, useEffect } from "react";

function NavBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const activeUser = localStorage.getItem("activeUser");
    const { user } = useSelector((state) => state.authSlice);
    const accessToken = user.accessToken;

    useEffect(() => {
        setIsLoggedIn(!!activeUser);
        console.log("activeUser-->>", activeUser);
    }, [activeUser]);

    const onLogoutHandler = () => {
        dispatch(logOutAndClearStorage());
        setIsLoggedIn(false);
    };

    return (
        <NavContainer className="nav-bar">
            <div className="left-section">
                <button onClick={() => navigate("/")}>Home</button>
            </div>
            <LeftBar className="right-section">
                {isLoggedIn ? (
                    <>
                        <button onClick={() => navigate("/profile")}>
                            마이페이지
                        </button>
                        <button onClick={onLogoutHandler}>로그아웃</button>
                    </>
                ) : (
                    <button onClick={() => navigate("/login")}>로그인</button>
                )}
            </LeftBar>
        </NavContainer>
    );
}

export default NavBar;

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 50px 150px 0px 150px;
    background-color: pink;

    & div {
    }
`;

const LeftBar = styled.div`
    display: flex;
    column-gap: 10px;

    & button {
        font-size: 14px;

        padding: 5px 10px;
        border-radius: 8px;
        border-color: transparent;

        &:hover {
            border: 1px solid gray;
            cursor: pointer;
        }
    }
`;
