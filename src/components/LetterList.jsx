import "../common.scss";
import {
    CardList,
    CardWrapper,
    NavBar,
    LeftBar,
    DateStyle,
    RightBar,
    ContentWrapper,
    ImgContainer,
    BodyWrapper,
    DetailButton,
} from "./LetterStyledComponents";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __deleteLetter, __fetchLetter } from "../redux/modules/lettersReducer";
import { useEffect } from "react";
import { startEditLetter } from "../redux/modules/toggleLetterReducer";

function LetterList() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { letters } = useSelector((state) => state.lettersReducer);
    const { user, accessToken } = useSelector((state) => state.authSlice);

    useEffect(() => {
        dispatch(__fetchLetter());
    }, []);

    const onNavigateToDetail = (id) => {
        navigate(`/${id}`);
    };

    const onActivateEditHandler = (item) => {
        if (!accessToken) {
            alert("로그인 후에 이용 가능합니다.");
        } else if (item.userId !== user.userId) {
            alert("직접 작성한 글만 수정 가능합니다.");
        } else {
            dispatch(startEditLetter(item));
        }
    };

    const onDeleteHandler = (item) => {
        if (item.userId !== user.userId) {
            alert("직접 작성한 글만 삭제 가능합니다.");
        } else {
            const deleteConfirm = window.confirm("방명록을 삭제하시겠습니까?");
            if (deleteConfirm) {
                return dispatch(__deleteLetter(item.id))
                    .then(() => dispatch(__fetchLetter()))
                    .catch((error) => console.error);
            } else return;
        }
    };

    const formattedDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}년 ${month}월 ${day}일`;
    };

    return (
        <CardList>
            {letters?.map((item) => {
                return (
                    <CardWrapper className="single card" key={item.id}>
                        <NavBar className="nav-bar">
                            <LeftBar className="left-bar">
                                <span>NO.{item.letterNumber}</span>
                                <span>|</span>
                                <span>작성자: {item.userNickname}</span>
                                <DateStyle>
                                    {formattedDate(item.createdAt)}
                                </DateStyle>
                            </LeftBar>
                            <RightBar className="right-bar">
                                <button
                                    onClick={() => onActivateEditHandler(item)}
                                >
                                    수정
                                </button>
                                <span>|</span>
                                <button onClick={() => onDeleteHandler(item)}>
                                    삭제
                                </button>
                                <span>|</span>
                                <button>신고</button>
                            </RightBar>
                        </NavBar>
                        <BodyWrapper>
                            <ImgContainer>
                                <img alt="null" />
                            </ImgContainer>
                            <ContentWrapper>
                                <span>To: {item.writtenTo}</span>
                                <p>{item.content}</p>
                                <DetailButton
                                    onClick={() => onNavigateToDetail(item.id)}
                                >
                                    자세히 보기
                                </DetailButton>
                            </ContentWrapper>
                        </BodyWrapper>
                    </CardWrapper>
                );
            })}
        </CardList>
    );
}

export default LetterList;
