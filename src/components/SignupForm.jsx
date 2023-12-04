import { useNavigate } from "react-router-dom";
import { Container, Form } from "./LoginForm";
import { useState } from "react";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { __logIn, __signUp } from "../redux/modules/authSlice";
import { isLogin } from "../redux/modules/authSlice";

function SignupForm() {
    const [id, onChangeIdHandler] = useInput();
    const [password, onChangePasswordHandler] = useInput();
    const [nickname, onChangeNicknameHandler] = useInput();

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
        } else if (nickname.length === 0) {
            alert("닉네임을 입력해주세요");
            return;
        }

        try {
            await dispatch(__signUp({ id, password, nickname })).unwrap();
            alert("회원가입이 완료되었습니다.");
            navigate("/login?mode=login");
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
                <label>회원가입</label>
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
                <input
                    type="text"
                    name="nickname"
                    value={nickname}
                    onChange={onChangeNicknameHandler}
                    placeholder="닉네임(4~10글자)"
                    minLength={4}
                    maxLength={10}
                />
                <button type="submit">회원가입</button>
            </Form>
        </Container>
    );
}

export default SignupForm;
