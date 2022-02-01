import styled from "styled-components";
import colors from "../../utils/style/color";
import { ThemeContext } from "../../utils/context";
import { useContext } from "react";

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
`;

const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${colors.secondary};
`;

function Footer() {
    const { toogleTheme } = useContext(ThemeContext);
    const themeToogle = () => {
        toogleTheme();
    };
    return (
        <FooterContainer>
            <NightModeButton onClick={themeToogle}>
                Changer de mode
            </NightModeButton>
        </FooterContainer>
    );
}

export default Footer;
