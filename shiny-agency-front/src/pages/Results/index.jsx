import { useContext } from "react";
import { SurveyContext, ThemeContext } from "../../utils/context";
import useFetch from "../../utils/HookS/useFetch";
import { encodeQueryData } from "../../utils/Function";
import { StyledLink } from "../../utils/Atom/StyledLink";
import ChildrenOrLoader from "../../components/ChildrenOrLoader";
import {
    ResultsContainer,
    ResultsTitle,
    JobTitle,
    TitleWrapper,
    DescriptionWrapper,
    JobDescription,
} from "./styleComponents";
import ChildrenOrError from "../../components/ChildrenOrError";
import Error from "../../components/Error";

/**
 * Add a coma to a word if not last of the list
 * @param {number} index
 * @param {string} title
 * @param {number} lengthArrTitle
 * @returns string
 */
export function formatListTitle(index, title, lengthArrTitle) {
    if (index === lengthArrTitle - 1) {
        return title;
    }
    return `${title},`;
}

function Results() {
    const { answers } = useContext(SurveyContext);
    const surveyResults = encodeQueryData(answers);
    const { theme } = useContext(ThemeContext);
    const URL = `http://localhost:8000/results?${surveyResults}`;
    const [data, isLoading, error] = useFetch(URL);

    return (
        <ResultsContainer theme={theme}>
            <ChildrenOrError error={error} errorComp={<Error />}>
                <ChildrenOrLoader isLoading={isLoading}>
                    <TitleWrapper>
                        <ResultsTitle theme={theme}>
                            Les compétences dont vous avez besoin sont
                            {data &&
                                data.resultsData.map((result, index) => (
                                    <JobTitle key={`r${index}-${result.title}`} theme={theme}>
                                        {formatListTitle(
                                            index,
                                            result.title,
                                            data.resultsData.length
                                        )}
                                    </JobTitle>
                                ))}
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
                                        key={`detail-${index}-${result.title}`}
                                    >
                                        <JobTitle data-testid="job-title" theme={theme}>
                                            {result.title}
                                        </JobTitle>
                                        <p data-testid="job-description">
                                            {result.description}
                                        </p>
                                    </JobDescription>
                                );
                            })}
                    </DescriptionWrapper>
                </ChildrenOrLoader>
            </ChildrenOrError>
        </ResultsContainer>
    );
}

export default Results;
