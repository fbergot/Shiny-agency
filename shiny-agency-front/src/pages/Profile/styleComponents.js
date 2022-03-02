import styled from "styled-components";
import colors from "../../utils/style/color";

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 90px 0;
    margin: 0 90px;
    background-color: ${({ theme }) =>
        theme === "light" ? colors.backgroundLight : colors.backgroundDark};
`;
export const Picture = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 75px;
`;
