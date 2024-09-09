import React, { FC } from 'react';
import { Cell } from '../models/Cell';
import { Colors } from '../models/Colors';

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
    return (
        <div
            className = {[
                'cell',
                cell.color,
                selected ? cell.color === Colors.BLACK ? 'selectedBlack' : 'selectedWhite' : ''
            ].join(' ')}
            onClick = {() => click(cell)}
            style = {{backgroundColor: cell.available && cell.figure ? cell.color === Colors.BLACK ? 'green' : 'lightgreen' : ''}}
        >
            {cell.available && !cell.figure && <div className={"available"}/>}
            {cell.figure?.logo && <img src={cell.figure?.logo} alt='' />}
        </div>
    );
};

export default CellComponent;
