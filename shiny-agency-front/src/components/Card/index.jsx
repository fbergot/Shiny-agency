import PropTypes from "prop-types";
import { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../utils/context";
import colors from "../../utils/style/color";

const CardWrapp = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${({ theme }) =>
        theme === "light" ? colors.backgroundLight : colors.backgroundDark};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`;

const CardLabel = styled.span`
    color: ${({ theme }) => (theme === "light" ? colors.primary : "#ffffff")};
    font-size: 20px;
    font-weight: bold;
    padding: 10px 0;
`;

const WrapperImage = styled.div`
    display: flex;
    justify-content: center;
    margin: 15px 0;
`;

const SpanName = styled.span`
    text-align: center;
    padding: 10px 0;
    font-weight: bold;
`;

const CardImage = styled.img`
    height: 180px;
    width: 180px;
    object-fit: cover;
    border-radius: 50%;
`;

function Card({ label, title, picture = "default_value" }) {
    const { theme } = useContext(ThemeContext);
    const [state, setState] = useState(false);
    const setFavorite = () => {
        setState(!state);
    };
    const emojiFavOrNot = state ? String.fromCodePoint(0x2b50) : "";
    return (
        <CardWrapp data-testid="card" theme={theme} onClick={() => setFavorite()}>
            <CardLabel theme={theme}>{label}</CardLabel>
            <WrapperImage>
                <CardImage src={picture} alt="freelance" />
            </WrapperImage>
            <SpanName>
                {emojiFavOrNot} {title} {emojiFavOrNot}
            </SpanName>
        </CardWrapp>
    );
}

Card.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string,
    picture: PropTypes.string.isRequired,
};

// moins utile avec les valeurs par defaut dans la destructuration
Card.defaultProps = {
    label: "Dev Web",
    title: "Mr Durand",
};

export default Card;
