import React from "react";

import { Columns } from "components";
import { fillArrayByNumber } from "utils/fillArrayByNumber";

interface RowsProps {
    row: number;
    column: number;
    getRowColIndex: (hoveredRow: number, hoveredCol: number) => void;
}

export const Rows: React.FC<RowsProps> = ({ row, column, getRowColIndex }) => {
    const rows = fillArrayByNumber(row);

    return (
        <>
            {rows.map((_, index) => (
                <tr key={index}>
                    <Columns
                        cells={column}
                        getRowColIndex={getRowColIndex}
                        rowIndex={index}
                    />
                </tr>
            ))}
        </>
    );
};
