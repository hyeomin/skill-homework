import Tabs from "../components/Tabs";
import styled from "styled-components";
import Display from "../components/Display";
import bgImage from "../assets/tile.png";
import NavBar from "../components/NavBar";

function Home() {
    return (
        <Container className="container">
            <NavBar />
            <BodyContainer className="body">
                <Tabs />
                <Display />
            </BodyContainer>
            <footer></footer>
        </Container>
    );
}

export default Home;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url(${bgImage});
    background-size: 20%;
`;

const BodyContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
