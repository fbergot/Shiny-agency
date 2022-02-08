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
    const { toogleTheme, theme } = useContext(ThemeContext);
    const themeToogle = () => {
        toogleTheme();
    };
    const emojiTheme =
        theme === "light" ? String.fromCodePoint(0x1f319) : String.fromCodePoint(0x1f31e);
    return (
        <FooterContainer>
            <NightModeButton onClick={themeToogle}>
                Changer de mode {emojiTheme}
            </NightModeButton>
        </FooterContainer>
    );
}

export default Footer;
