import { Outlet, useParams } from "react-router-dom";
import BeginOrLastQuestions from "../../utils/Molecule/BeginOrLastQuestions";
import ChildrenOrLoader from "../../components/ChildrenOrLoader";
import useFetch from "../../utils/HookS/useFetch";
import { useContext } from "react";
import { SurveyContext } from "../../utils/context";
import { Wrapper, SurveyContainer, ResponseButton } from "./styleComponents";
import ChildrenOrError from "../../components/ChildrenOrError";
import Error from "../../components/Error";

function Survey() {
    const objParam = useParams();
    const URL = "http://localhost:8000/survey";
    const [questions, isLoading, error] = useFetch(URL);
    const { saveAnswers } = useContext(SurveyContext);

    const questionNumber =
        parseInt(objParam.questionNumber, 10) > 10
            ? 10
            : parseInt(objParam.questionNumber, 10) < 1
            ? 1
            : parseInt(objParam.questionNumber, 10);

    return (
        <Wrapper>
            <ChildrenOrError error={error} errorComp={<Error />}>
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
            </ChildrenOrError>
            <Outlet />
        </Wrapper>
    );
}

export default Survey;
