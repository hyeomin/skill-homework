import memberList from "../assets/memberList.json";
import shortid from "shortid";
import { useState, useEffect } from "react";
import { ImgContainer } from "./LetterStyledComponents";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __addLetter, __fetchLetter } from "../redux/modules/lettersReducer";
import { toggleAddLetter } from "../redux/modules/toggleLetterReducer";

function AddLetter() {
    const [content, setContent] = useState("");
    const [selectedMember, setSelectedMember] = useState(memberList[0].name);

    const dispatch = useDispatch();
    const { letters } = useSelector((state) => state.lettersReducer);
    const { isEditing, letter } = useSelector(
        (state) => state.toggleLetterReducer
    );
    const { user, accessToken } = useSelector((state) => state.authSlice);
    console.log("user->>", user);
    console.log("accessToken->>", accessToken);

    // const activeUser = localStorage.getItem("activeUser");

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const timestamp = new Date().toISOString();

        const newLetter = {
            id: shortid.generate(),
            letterNumber: letters.length + 1,
            userId: user.userId,
            userNickname: user.nickname,
            content,
            writtenTo: selectedMember,
            createdAt: timestamp,
            updatedAt: timestamp,
        };
        dispatch(__addLetter(newLetter));
        dispatch(toggleAddLetter(false));
        dispatch(__fetchLetter());
    };

    const onCloseToggleHandler = () => {
        dispatch(toggleAddLetter(false));
    };

    useEffect(() => {
        if (isEditing && letter) {
            setContent(letter.content);
            setSelectedMember(letter.writtenTo);
        }
    }, [isEditing, letter]);

    return (
        <Container className="modal">
            <ModalContainer className="modal-content">
                <SubmitForm onSubmit={onSubmitHandler}>
                    <SelectContainer>
                        <label>누구에게 보내시겠습니까?</label>
                        <select
                            className="select-section"
                            value={selectedMember}
                            onChange={(e) => setSelectedMember(e.target.value)}
                        >
                            {memberList.map((item) => {
                                return (
                                    <option key={item.id}>{item.name}</option>
                                );
                            })}
                        </select>
                        <label>|</label>
                        {/* 여기 유저 닉네임 추가해야 함 */}
                        <span>닉네임: {user.nickname}</span>
                    </SelectContainer>
                    <ContentBody className="content-input">
                        <ImgContainer>
                            <img alt="null" />
                        </ImgContainer>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="방명록을 입력하세요."
                        ></textarea>
                    </ContentBody>
                    <ButtonContainer>
                        <SubmitButton
                            type="button"
                            onClick={onCloseToggleHandler}
                        >
                            취소
                        </SubmitButton>
                        <SubmitButton type="submit">등록하기</SubmitButton>
                    </ButtonContainer>
                </SubmitForm>
            </ModalContainer>
        </Container>
    );
}

export default AddLetter;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;

    position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.5);
    border: 1px solid black;
    border-radius: 8px;
`;

const ModalContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    top: 40%;
    left: 40%;

    width: 650px;
    height: 400px;
    padding: 30px;

    border-radius: 20px;
    background-color: white;
`;

const SubmitForm = styled.form`
    display: flex;
    flex: 1;
    flex-direction: column;
    row-gap: 10px;
    padding-bottom: 10px;

    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
`;

const SelectContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 10px;
    font-size: 14px;

    padding: 10px;

    background-color: #f2f2f2;

    & select {
        width: 150px;
        padding: 2px;
        border-radius: 5px;
        border-color: lightgray;
    }
`;

const ContentBody = styled.div`
    display: flex;
    height: 100px;

    height: 150px;

    flex-direction: row;
    column-gap: 10px;

    & textarea {
        flex: 1;
        padding: 10px;
        border: 1px solid lightgray;
        border-radius: 5px;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    column-gap: 5px;
`;

const SubmitButton = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid lightgray;
    border-radius: 5px;
`;
