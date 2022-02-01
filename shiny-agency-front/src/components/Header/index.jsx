import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/pictures/dark-logo.png";
import { StyledLink } from "../../utils/Atom/StyledLink";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledHomeLogo = styled.img`
    margin: 10px 0px 0 10px;
    width: 150px;
`;

const StyledNav = styled.nav`
    margin: 0 20px 0 0;
`;

function Header() {
    return (
        <StyledHeader>
            <Link to="/">
                <StyledHomeLogo src={Logo} alt="Shiny" />
            </Link>
            <StyledNav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>
            </StyledNav>
        </StyledHeader>
    );
}

export default Header;
