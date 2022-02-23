import { Link } from "react-router-dom";

function BeginOrLastQuestions({ questionNumber = 1, surveyData }) {
    return (
        <div>
            {questionNumber > 1 && <Link to={`/survey/${questionNumber - 1}`}>Précédent</Link>}
            {surveyData[questionNumber + 1] ? (
                <Link to={`/survey/${questionNumber + 1}`}>Suivant</Link>
            ) : (
                <Link to="../results">Résultats</Link>
            )}
        </div>
    );
}
export default BeginOrLastQuestions;
