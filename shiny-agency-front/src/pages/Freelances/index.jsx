import Card from "../../components/Card";
import useFetch from "../../utils/HookS/useFetch";
import ChildrenOrLoader from "../../components/ChildrenOrLoader";
import { Link } from "react-router-dom";
import { WrapperCardCont, CardsContainer, PageTitle, PageSubtitle } from "./styleComponents";
import ChildrenOrError from "../../components/ChildrenOrError";
import Error from "../../components/Error";

function Freelances() {
    const [dataFreelances, isLoading, error] = useFetch("http://localhost:8000/freelances");
    return (
        <>
            <PageTitle>Trouver votre prestataire</PageTitle>
            <PageSubtitle>
                Chez Shiny, nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>

            <WrapperCardCont>
                <ChildrenOrError error={error} errorComp={<Error />}>
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
                </ChildrenOrError>
            </WrapperCardCont>
        </>
    );
}

export default Freelances;
