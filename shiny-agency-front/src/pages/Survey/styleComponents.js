import styled from "styled-components";
import colors from "../../utils/style/color";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const SurveyContainer = styled.div`
    padding: 60px 60px;
    margin: 60px 30px 30px 30px;
    background-color: ${colors.backgroundLight};
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ResponseButton = styled.button`
    padding: 13px 30px;
    background-color: ${colors.backgroundLight};
    border-radius: 11px;
    margin: 10px;
    font-weight: bold;
    &:hover {
        border: 1px solid ${colors.primary};
    }
`;
