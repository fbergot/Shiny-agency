import styled from "styled-components";
import HomeImage from "../../assets/pictures/home-illustration.svg";
import colors from "../../utils/style/color";
import { StyledLink } from "../../utils/Atom/StyledLink";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context";

const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const HomeContainer = styled.div`
    padding: 60px 90px;
    margin: 60px 30px 30px 30px;
    background-color: ${({ theme }) =>
        theme === "light" ? colors.backgroundLight : colors.backgroundDark};
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HomeTitle = styled.h2`
    padding-bottom: 30px;
    max-width: 320px;
    line-height: 50px;
    color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
    flex: 1;
`;

const HomeIllustation = styled.img`
    flex: 1;
`;

function Home() {
    const { theme } = useContext(ThemeContext);
    return (
        <HomeWrapper>
            <HomeContainer theme={theme}>
                <div>
                    <HomeTitle theme={theme}>
                        Repérer vos besoins, on s'occupe du reste, avec les meilleurs talents
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
