import styled from "styled-components";
import colors from "../style/color";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    padding: 6px 10px;
    margin: 0 5px;
    color: ${colors.secondary};
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white;
         border-radius: 30px;
         background-color: ${colors.primary}
    `}
`;
