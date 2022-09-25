import React from "react";

import { Cells } from "../components";
import { fillArrayByNumber } from "utils/fillArrayByNumber";

interface ColumnsProps {
    cells: number;
    getRowColIndex: (hoveredRow: number, hoveredCol: number) => void;
    rowIndex: number;
}

export const Columns: React.FC<ColumnsProps> = ({
    cells,
    getRowColIndex: getIndexColAndRow,
    rowIndex,
}) => {
    const columns = fillArrayByNumber(cells);

    return (
        <>
            {columns.map((_, index) => (
                <td
                    onMouseEnter={() =>
                        getIndexColAndRow(rowIndex + 1, index + 1)
                    }
                    key={index}
                >
                    <Cells />
                </td>
            ))}
        </>
    );
};
