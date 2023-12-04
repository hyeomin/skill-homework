import React from "react";
import styled from "styled-components";

function MemberProfile() {
    return (
        <Container>
            <VisitData>
                <label>TODAY</label>
                <span>77</span>
                <span>|</span>
                <label>TOTAL</label>
                <span>8121</span>
            </VisitData>
            <Profile className="profile"></Profile>
        </Container>
    );
}

export default MemberProfile;

const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 10px;
`;

const VisitData = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    column-gap: 5px;

    width: 220px;
    height: 50px;
    padding: 0 0 5px 24px;

    & label {
        margin-top: auto;
        font-size: 8px;
    }

    & span {
        margin-top: auto;
        font-size: 12px;
    }
`;

const Profile = styled.div`
    flex: 1;
    background-color: white;
    border: 1px solid gray;
    border-radius: 10px;
`;
