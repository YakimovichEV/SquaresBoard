import React, { useState } from "react";

import "./cells.css";

export const Cells: React.FC = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const mouseOverHandler = () => setIsActive((prevState) => !prevState);

    return (
        <div
            onMouseOver={mouseOverHandler}
            className={isActive ? "active" : "cell"}
        />
    );
};
