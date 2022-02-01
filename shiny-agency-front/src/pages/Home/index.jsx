import styled from "styled-components";
import HomeImage from "../../assets/pictures/home-illustration.svg";
import colors from "../../utils/style/color";
import { StyledLink } from "../../utils/Atom/StyledLink";

const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const HomeContainer = styled.div`
    padding: 60px 90px;
    margin: 60px 30px 30px 30px;
    background-color: ${colors.backgroundLight};
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HomeTitle = styled.h1`
    margin-left: 5px;
    flex: 1;
`;

const HomeIllustation = styled.img`
    flex: 1;
`;

function Home() {
    return (
        <HomeWrapper>
            <HomeContainer>
                <div>
                    <HomeTitle>
                        Repérer vos besoins, on s'occupe du reste, avec les
                        meilleurs talents
                    </HomeTitle>
                    <StyledLink $isFullLink to="/survey/1">
                        Faire le test
                    </StyledLink>
                </div>
                <HomeIllustation src={HomeImage} alt="tt" />
            </HomeContainer>
        </HomeWrapper>
    );
}

export default Home;
