import React, { useState } from "react";
import styled, { css } from "styled-components";
import memberList from "../assets/memberList.json";

function Tabs() {
    const [activeMember, setActiveMember] = useState("All");

    const onChangeActiveMember = (event) => {
        if (event.target === event.currentTarget) return;
        setActiveMember(event.target.textContent);
    };
    return (
        <Container>
            <TabsList onClick={onChangeActiveMember}>
                <Tab $activeMember={activeMember}>All</Tab>
                {memberList.map((item) => {
                    return (
                        <Tab key={item.id} $activeMember={activeMember}>
                            {item.name}
                        </Tab>
                    );
                })}
            </TabsList>
        </Container>
    );
}

export default Tabs;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 220px;
    height: 600px;

    padding: 20px;
    row-gap: 10px;
`;

const TabsList = styled.ul`
    display: flex;
    flex-direction: column;

    row-gap: 10px;
`;

const Tab = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;

    border-radius: 12px;

    &:hover {
        transform: scale(1.04);
        border: 1px solid blue;
        cursor: pointer;
    }

    ${(props) => {
        if (props.$activeMember === props.children) {
            return css`
                background-color: blue;
                color: white;
            `;
        }
        return css`
            background-color: lightgray;
        `;
    }}
`;
