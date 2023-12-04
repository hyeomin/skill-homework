import styled from "styled-components";

export const CardList = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 30px;
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;

    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
`;

export const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #f2f2f2;

    padding: 8px 5px;
`;

export const LeftBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    column-gap: 5px;
    font-size: 14px;
`;

export const DateStyle = styled.span`
    font-size: 12px;
    color: gray;
`;

export const RightBar = styled.div`
    display: flex;
    flex-direction: row;

    column-gap: 5px;

    & button {
        color: gray;
        border: transparent;
        background-color: transparent;
        cursor: pointer;
    }

    & span {
        color: gray;
    }
`;

export const BodyWrapper = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 10px;

    height: 200px;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    row-gap: 10px;
    padding: 10px 10px;

    & span {
        font-weight: 700;
    }

    & p {
        flex: 1;
        padding: 15px;
        margin: auto 0;
        font-size: 14px;
        background-color: lightblue;
    }
`;

export const ImgContainer = styled.div`
    display: flex;
    width: 170px;
    background-color: lightgray;
    border-radius: 5px;
`;

export const DetailButton = styled.button`
    display: flex;
    margin-left: auto;
    padding: 3px 6px;
    border: 1px solid lightgray;
    border-radius: 5px;

    &:hover {
        transform: scale(1.03);
        cursor: pointer;
    }
`;
