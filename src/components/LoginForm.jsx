import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { __authorizeUser, __logIn } from "../redux/modules/authSlice";
import { useState } from "react";

function LoginForm({ setSignUp }) {
    const [id, onChangeIdHandler] = useInput();
    const [password, onChangePasswordHandler] = useInput();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmitLoginAuthHandler = async (event) => {
        event.preventDefault();
        if (id.length === 0) {
            alert("아이디를 입력해주세요");
            return;
        } else if (password.length === 0) {
            alert("비밀번호를 입력해주세요");
            return;
        }
        try {
            const response = await dispatch(__logIn({ id, password })).unwrap();
            localStorage.setItem("activeUser", JSON.stringify(response));
            const activeUser = localStorage.getItem("activeUser");
            dispatch(__authorizeUser(activeUser.accessToken));
            alert("로그인 되었습니다.");
            navigate("/");
        } catch (error) {
            alert("회원가입 실패: " + error.response.data.message);
        }
    };

    return (
        <Container>
            <Form
                className="content-container"
                onSubmit={onSubmitLoginAuthHandler}
            >
                <label>로그인</label>
                <input
                    type="text"
                    name="id"
                    value={id}
                    onChange={onChangeIdHandler}
                    placeholder="아이디(4~10글자)"
                    minLength={4}
                    maxLength={10}
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChangePasswordHandler}
                    placeholder="비밀번호(4~15글자)"
                    minLength={4}
                    maxLength={15}
                />
                <button type="submit">로그인</button>
            </Form>
            <SignupButton
                type="button"
                onClick={() => navigate("/login?mode=signup")}
            >
                회원가입
            </SignupButton>
        </Container>
    );
}

export default LoginForm;

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding-top: 30px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 18px;

    & input {
        width: 300px;
        padding: 5px;
        border-color: transparent;
        border-bottom: 1px solid lightgray;
    }

    & button {
        margin: 10px 0;
        padding: 10px 0;
        border-color: transparent;
        border-radius: 5px;
        background-color: lightblue;
    }
`;

const SignupButton = styled.button`
    font-size: 12px;
    color: gray;
    background-color: transparent;
    border-color: transparent;
    border-bottom: 1px solid lightgray;
`;
