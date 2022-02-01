import { Loader } from "../utils/Atom/StyledLoader";

function ChildrenOrLoader({ isLoading, children }) {
    return <div>{isLoading ? <Loader /> : children}</div>;
}

export default ChildrenOrLoader;
