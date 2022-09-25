import React from "react";

import { Rows } from "components";

import "./table.css";

interface TableProps {
    row: number;
    column: number;
    getIndexColAndRow: (row: number, col: number) => void;
}

export const Table: React.FC<TableProps> = ({
    row,
    column,
    getIndexColAndRow,
}) => (
    <>
        <table className="table">
            <tbody>
                <Rows
                    row={row}
                    column={column}
                    getRowColIndex={getIndexColAndRow}
                />
            </tbody>
        </table>
    </>
);
