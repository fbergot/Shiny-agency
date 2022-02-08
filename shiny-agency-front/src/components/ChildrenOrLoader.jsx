import { Loader } from "../utils/Atom/StyledLoader";

function ChildrenOrLoader({ isLoading, children }) {
    return <div>{isLoading ? <Loader data-testid="loader" /> : children}</div>;
}

export default ChildrenOrLoader;
