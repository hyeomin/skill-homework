import {
    Container,
    OuterWrapper,
    InnerLine,
    InnerWrapper,
    LetterContainer,
    DisplayTitle,
    CardContainer,
    WriteButton,
} from "./DisplayStyledComponents";
import LetterList from "./LetterList";
import MemberProfile from "./MemberProfile";
import AddLetter from "./AddLetter";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddLetter } from "../redux/modules/toggleLetterReducer";

function Display() {
    const dispatch = useDispatch();
    const toggleLetter = useSelector((state) => state.toggleLetterReducer);
    const { accessToken } = useSelector((state) => state.authSlice);

    const onAddLetterHandler = () => {
        if (!accessToken) {
            alert("로그인 후에 이용 가능합니다.");
        } else {
            dispatch(toggleAddLetter(true));
        }
    };

    return (
        <Container>
            <OuterWrapper className="outer-box">
                <InnerLine className="inner-line">
                    <InnerWrapper className="inner-box">
                        <MemberProfile />
                        <LetterContainer className="letter-section">
                            <DisplayTitle>
                                <span>더 오피스의 미니홈피</span>
                            </DisplayTitle>
                            <CardContainer>
                                <WriteButton onClick={onAddLetterHandler}>
                                    나도 팬레터 쓰기
                                </WriteButton>
                                {toggleLetter.addLetterOpened && <AddLetter />}
                                <LetterList />
                            </CardContainer>
                        </LetterContainer>
                    </InnerWrapper>
                </InnerLine>
            </OuterWrapper>
        </Container>
    );
}

export default Display;
