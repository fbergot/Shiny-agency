import { Loader } from "../utils/Atom/StyledLoader";

function ChildrenOrLoader({ isLoading, children }) {
    return (isLoading && <Loader data-testid="loader" />) || children;
    // return <div>{isLoading || children}</div>;
}

export default ChildrenOrLoader;
