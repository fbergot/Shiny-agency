import { useParams } from "react-router-dom";
import ChildrenOrLoader from "../../components/ChildrenOrLoader";
import useFetch from "../../utils/HookS/useFetch";

function Profile() {
    const { id } = useParams();
    const URL = `http://localhost:8000/freelance/?id=${id}`;
    const [data, isLoading, error] = useFetch(URL);
    let freelData;
    if (data) {
        freelData = data.freelanceData;
    }
    return (
        <div>
            <ChildrenOrLoader isLoading={isLoading}>
                {data && (
                    <>
                        <img
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
                            {freelData.available ? "Disponible maintenant" : "Indisponible"}
                        </div>
                        <span>{freelData.tjm} € / jour</span>
                    </>
                )}
            </ChildrenOrLoader>
        </div>
    );
}
export default Profile;
