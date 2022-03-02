import styled from "styled-components";
import colors from "../../utils/style/color";

export const WrapperCardCont = styled.div`
    display: flex;
    justify-content: center;
`;

export const CardsContainer = styled.div`
    display: grid;
    gap: 40px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`;

export const PageTitle = styled.h1`
    font-size: 30px;
    text-align: center;
    padding-bottom: 30px;
`;

export const PageSubtitle = styled.h2`
    color: ${colors.secondary};
    font-size: 20px;
    text-align: center;
    padding-bottom: 30px;
`;
