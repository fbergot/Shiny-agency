import { Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/color";
import BeginOrLastQuestions from "../../utils/Molecule/BeginOrLastQuestions";
import ChildrenOrLoader from "../../components/ChildrenOrLoader";
import useFetch from "../../utils/HookS/useFetch";
import { useContext } from "react";
import { SurveyContext } from "../../utils/context";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const SurveyContainer = styled.div`
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

const ResponseButton = styled.button`
    padding: 13px 30px;
    background-color: ${colors.backgroundLight};
    border-radius: 11px;
    margin: 10px;
    font-weight: bold;
    &:hover {
        border: 1px solid ${colors.primary};
    }
`;

function Survey() {
    const objParam = useParams();
    const [questions, isLoading, error] = useFetch("http://localhost:8000/survey");
    const { saveAnswers } = useContext(SurveyContext);

    const questionNumber =
        parseInt(objParam.questionNumber, 10) > 10
            ? 10
            : parseInt(objParam.questionNumber, 10) < 1
            ? 1
            : parseInt(objParam.questionNumber, 10);

    return (
        <Wrapper>
            {!error ? (
                <SurveyContainer>
                    <h2>Question {questionNumber}</h2>

                    <ChildrenOrLoader isLoading={isLoading}>
                        {questions && questions.surveyData[questionNumber]}
                    </ChildrenOrLoader>

                    <div>
                        <ResponseButton
                            onClick={() => saveAnswers(1, questionNumber)}
                            type="button"
                        >
                            Oui
                        </ResponseButton>
                        <ResponseButton
                            onClick={() => saveAnswers(0, questionNumber)}
                            type="button"
                        >
                            Non
                        </ResponseButton>
                    </div>

                    {questions && (
                        <BeginOrLastQuestions
                            questionNumber={questionNumber}
                            surveyData={questions?.surveyData}
                        />
                    )}
                </SurveyContainer>
            ) : (
                <div>Une erreur est survenue</div>
            )}
            <Outlet />
        </Wrapper>
    );
}

export default Survey;
