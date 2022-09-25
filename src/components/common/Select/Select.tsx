import React, { useEffect, useState } from "react";

import { Button } from "..";
import { getPresetsGameMode } from "api/getPresetsGameMode";

import "./select.css";

interface SelectProps {
    selectedLevel: "Easy" | "Normal" | "Hard";
    changeGameMode: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onClick: () => void;
}

export const Select: React.FC<SelectProps> = ({
    selectedLevel,
    changeGameMode,
    onClick,
}) => {
    const [options, setOption] = useState<string[]>([]);

    useEffect(() => {
        getPresetsGameMode().then((res) =>
            setOption(res.map(({ name }) => name))
        );
    }, []);

    return (
        <div className="select-container">
            <select
                className="select"
                value={selectedLevel}
                onChange={changeGameMode}
            >
                {options.map((option) => (
                    <option key={option}>{option}</option>
                ))}
            </select>
            <Button onClick={onClick} children="Start" />
        </div>
    );
};
