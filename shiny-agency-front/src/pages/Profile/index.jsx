import { useContext } from "react";
import { useParams } from "react-router-dom";
import ChildrenOrError from "../../components/ChildrenOrError";
import ChildrenOrLoader from "../../components/ChildrenOrLoader";
import Error from "../../components/Error";
import { ThemeContext } from "../../utils/context";
import useFetch from "../../utils/HookS/useFetch";
import { Picture, ProfileWrapper } from "./styleComponents";

function Profile() {
    const { id } = useParams();
    const theme = useContext(ThemeContext);
    const URL = `http://localhost:8000/freelance/?id=${id}`;
    const [data, isLoading, error] = useFetch(URL);
    let freelData;
    if (data) {
        freelData = data.freelanceData;
    }
    return (
        <ProfileWrapper theme={theme}>
            <ChildrenOrError error={error} errorComp={<Error />}>
                <ChildrenOrLoader isLoading={isLoading}>
                    {data && (
                        <div>
                            <Picture
                                src={freelData.picture}
                                alt={freelData.name}
                                height={150}
                                width={150}
                            />
                            <h1>{freelData.name}</h1>
                            <span>{freelData.location}</span>
                            <h2>{freelData.job}</h2>
                            <div>
                                {freelData.skills &&
                                    freelData.skills.map((skill) => (
                                        <div key={`skill-${skill}-${id}`}>{skill}</div>
                                    ))}
                            </div>
                            <div>
                                {freelData.available
                                    ? "Disponible maintenant"
                                    : "Indisponible"}
                            </div>
                            <span>{freelData.tjm} € / jour</span>
                        </div>
                    )}
                </ChildrenOrLoader>
            </ChildrenOrError>
        </ProfileWrapper>
    );
}
export default Profile;
