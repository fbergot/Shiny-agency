import HomeImage from "../../assets/pictures/home-illustration.svg";
import { StyledLink } from "../../utils/Atom/StyledLink";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context";
import { HomeContainer, HomeWrapper, HomeTitle, HomeIllustation } from "./styleComponents";

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
