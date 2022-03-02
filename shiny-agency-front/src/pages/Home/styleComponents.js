import styled from "styled-components";
import colors from "../../utils/style/color";

export const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const HomeContainer = styled.div`
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

export const HomeTitle = styled.h2`
    padding-bottom: 30px;
    max-width: 320px;
    line-height: 50px;
    color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
    flex: 1;
`;

export const HomeIllustation = styled.img`
    flex: 1;
`;
