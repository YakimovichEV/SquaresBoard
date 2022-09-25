import { useEffect, useState } from "react";

import { Table } from "components";
import { Select } from "components/common";

import { getLevelOfGame } from "utils/typeOfApp";

import "./App.css";

export interface MouseOverCells {
    row: number;
    col: number;
    id: string;
}

export type PlayLevel = "Easy" | "Normal" | "Hard";

function App() {
    const [selectedLevel, setSelectedLevel] = useState<PlayLevel>("Easy");
    const [isGameStart, setGameStart] = useState<boolean>(false);
    const [mouseOverCells, setMouseOverCells] = useState<MouseOverCells[]>([]);

    const getIndexColAndRow = (hoveredRow: number, hoveredCol: number) => {
        const newMouseOverCells = {
            row: hoveredRow,
            col: hoveredCol,
            id: `${hoveredRow}${hoveredCol}`,
        };
        if (
            mouseOverCells.some(
                ({ row, col }) => row === hoveredRow && col === hoveredCol
            )
        ) {
            return setMouseOverCells(
                mouseOverCells.filter(
                    ({ id }) => id !== `${hoveredRow}${hoveredCol}`
                )
            );
        }
        return setMouseOverCells((prevState) => [
            ...prevState,
            newMouseOverCells,
        ]);
    };

    const changeGameMode = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setGameStart(false);
        setSelectedLevel(event.target.value as PlayLevel);
    };

    useEffect(() => {
        setMouseOverCells([]);
    }, [selectedLevel]);

    return (
        <div className="content">
            <Select
                selectedLevel={selectedLevel}
                changeGameMode={changeGameMode}
                onClick={() => setGameStart(true)}
            />
            <div className="content__log">
                {isGameStart && (
                    <Table
                        row={getLevelOfGame(selectedLevel)}
                        column={getLevelOfGame(selectedLevel)}
                        getIndexColAndRow={getIndexColAndRow}
                    />
                )}

                <div>
                    {isGameStart && <h2>Hover squares</h2>}
                    <ul
                        className="content__list"
                        key={new Date().getUTCMilliseconds()}
                    >
                        {isGameStart &&
                            mouseOverCells.map(({ row, col, id }) => (
                                <li key={id} className="content__item">
                                    row: {row} col: {col}
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
