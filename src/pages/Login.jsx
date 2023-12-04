import { useState } from "react";
import {
    Container,
    OuterWrapper,
    InnerLine,
    InnerWrapper,
} from "../components/DisplayStyledComponents";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Login() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const mode = queryParams.get("mode");

    return (
        <Container>
            <OuterWrapper className="outer-box">
                <InnerLine className="inner-line">
                    <InnerWrapper className="inner-box">
                        <FormContainer>
                            {mode === "signup" ? <SignupForm /> : <LoginForm />}
                        </FormContainer>
                    </InnerWrapper>
                </InnerLine>
            </OuterWrapper>
        </Container>
    );
}

export default Login;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: auto 0;
    padding: 40px 80px;
    height: 360px;

    border-radius: 10px;
    border: 1px solid lightgray;
    background-color: white;
`;
