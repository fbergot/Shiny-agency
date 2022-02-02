import { useContext } from "react";
import { SurveyContext, ThemeContext } from "../../utils/context";
import useFetch from "../../utils/HookS/useFetch";
import { encodeQueryData } from "../../utils/Function";
import styled from "styled-components";
import colors from "../../utils/style/color";
import { StyledLink } from "../../utils/Atom/StyledLink";
import ChildrenOrLoader from "../../components/ChildrenOrLoader";

const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px 90px;
    padding: 30px;
    background-color: ${(props) =>
        props.theme === "light" ? colors.backgroundLight : colors.backgroundDark};
`;

const ResultsTitle = styled.h2`
    color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
    font-weight: bold;
    font-size: 28px;
    max-width: 80%;
    text-align: center;
    & > span {
        padding-left: 10px;
    }
`;

const JobTitle = styled.span`
    color: ${({ theme }) => (theme === "light" ? colors.primary : colors.backgroundLight)};
    text-transform: capitalize;
`;

const DescriptionWrapper = styled.div`
    padding: 60px;
`;

const JobDescription = styled.div`
    font-size: 18px;
    & > p {
        color: ${({ theme }) => (theme === "light" ? colors.secondary : "#ffffff")};
        margin-block-start: 5px;
    }
    & > span {
        font-size: 20px;
    }
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function Results() {
    const { answers } = useContext(SurveyContext);
    const surveyResults = encodeQueryData(answers);
    const { theme } = useContext(ThemeContext);
    const URL = `http://localhost:8000/results?${surveyResults}`;
    const [data, isLoading, error] = useFetch(URL);

    return (
        <ResultsContainer theme={theme}>
            {!error ? (
                <ChildrenOrLoader isLoading={isLoading}>
                    <TitleWrapper>
                        <ResultsTitle theme={theme}>
                            Les compétences dont vous avez besoin sont
                            {data &&
                                data.resultsData.map((result, index) => {
                                    return (
                                        <JobTitle
                                            key={`r${index}-${result.title}`}
                                            theme={theme}
                                        >
                                            {result.title}
                                            {index === data.resultsData.length - 1 ? "" : ","}
                                        </JobTitle>
                                    );
                                })}
                        </ResultsTitle>
                        <StyledLink $isFullLink to="../freelances">
                            Découvrez nos profils
                        </StyledLink>
                    </TitleWrapper>
                    <DescriptionWrapper>
                        {data &&
                            data.resultsData.map((result, index) => {
                                return (
                                    <JobDescription
                                        theme={theme}
                                        key={`result-detail-${index}-${result.title}`}
                                    >
                                        <JobTitle theme={theme}>{result.title}</JobTitle>
                                        <p>{result.description}</p>
                                    </JobDescription>
                                );
                            })}
                    </DescriptionWrapper>
                </ChildrenOrLoader>
            ) : (
                <div>Une erreur est survenue</div>
            )}
        </ResultsContainer>
    );
}

export default Results;
