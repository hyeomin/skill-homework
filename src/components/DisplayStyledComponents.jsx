import "../common.scss";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
`;

export const OuterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 950px;
    height: 600px;

    padding: 20px;

    border: 1px solid gray;
    border-radius: 8px;
    background-color: lightblue;
`;

export const InnerLine = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    padding: 8px;

    border: 1.5px dashed white;
    border-radius: 8px;
`;

export const InnerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 10px;

    width: 100%;
    height: 100%;
    padding: 12px;
    border-radius: 8px;

    background-color: #f2f2f2;
`;

export const LetterContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const DisplayTitle = styled.div`
    display: flex;
    flex-direction: column;

    height: 50px;
    padding: 5px;

    font-family: "NeoDunggeunmo";
    font-size: 20px;

    color: gray;

    & span {
        margin-top: auto;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    row-gap: 20px;

    padding: 30px;

    background-color: white;
    border: 1px solid gray;
    border-radius: 5px;

    overflow: auto;
`;

export const WriteButton = styled.button`
    background-color: #f2f2f2;
    border: 1px solid lightgray;
    border-radius: 5px;
    margin-left: auto;

    font-size: 14px;

    &:hover {
        transform: scale(1.02);
        background-color: gray;
        color: white;
        cursor: pointer;
    }
`;
