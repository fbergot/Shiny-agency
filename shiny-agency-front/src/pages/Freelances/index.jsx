import Card from "../../components/Card";
import styled from "styled-components";
import colors from "../../utils/style/color";
import useFetch from "../../utils/HookS/useFetch";
import ChildrenOrLoader from "../../components/ChildrenOrLoader";
import { Link } from "react-router-dom";

const WrapperCardCont = styled.div`
    display: flex;
    justify-content: center;
`;

const CardsContainer = styled.div`
    display: grid;
    gap: 40px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`;

const PageTitle = styled.h1`
    font-size: 30px;
    text-align: center;
    padding-bottom: 30px;
`;

const PageSubtitle = styled.h2`
    color: ${colors.secondary};
    font-size: 20px;
    text-align: center;
    padding-bottom: 30px;
`;

function Freelances() {
    const [dataFreelances, isLoading, error] = useFetch("http://localhost:8000/freelances");
    return (
        <div>
            <PageTitle>Trouver votre prestataire</PageTitle>
            <PageSubtitle>
                Chez Shiny, nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>

            <WrapperCardCont>
                {!error ? (
                    <ChildrenOrLoader isLoading={isLoading}>
                        <CardsContainer>
                            {dataFreelances &&
                                dataFreelances.freelancersList.map((freelance) => {
                                    return (
                                        <Link
                                            key={`freelance-${freelance.id}`}
                                            to={`/profile/${freelance.id}`}
                                        >
                                            <Card
                                                label={freelance.job}
                                                picture={freelance.picture}
                                                title={freelance.name}
                                            />
                                        </Link>
                                    );
                                })}
                        </CardsContainer>
                    </ChildrenOrLoader>
                ) : (
                    <div>Une erreur est survenue</div>
                )}
            </WrapperCardCont>
        </div>
    );
}

export default Freelances;
