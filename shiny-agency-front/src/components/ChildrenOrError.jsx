import React from "react";

function ChildrenOrError({ error, errorComp, children }) {
    return (error && errorComp) || children;
}

export default ChildrenOrError;
