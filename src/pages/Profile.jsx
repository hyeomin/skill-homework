import { useDispatch, useSelector } from "react-redux";
import {
    OuterWrapper,
    InnerLine,
    InnerWrapper,
} from "../components/DisplayStyledComponents";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import bgImage from "../assets/tile.png";

function Profile() {
    const { user } = useSelector((state) => state.authSlice);
    console.log("profile user-->", user);

    // const profileOwner = user.find((item) => user.userId === userId);

    return (
        <Container>
            <NavBar />
            <SubContainer>
                <OuterWrapper className="outer-box">
                    <InnerLine className="inner-line">
                        <InnerWrapper className="inner-box">
                            <ProfileContainer>
                                <AvatarContainer className="img-container">
                                    <img src={user.avatar} />
                                </AvatarContainer>
                                <div>
                                    <label>아이디: </label>
                                    <span>{user.userId}</span>
                                </div>
                                <div>
                                    <label>닉네임: </label>
                                    <span>{user.nickname}</span>
                                </div>
                            </ProfileContainer>
                        </InnerWrapper>
                    </InnerLine>
                </OuterWrapper>
            </SubContainer>
        </Container>
    );
}

export default Profile;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url(${bgImage});
    background-size: 20%;
`;

const SubContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    padding: 30px;
`;

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 20px;

    margin: auto 0;
    background-color: pink;
`;

const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;

    height: 130px;
    background-color: purple;
`;
