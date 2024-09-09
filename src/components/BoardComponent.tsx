import React, { FC, useEffect, useState } from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";
import { Cell } from "../models/Cell";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;

}

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
    const [selecedCell, setSelectedCell] = useState<Cell | null>(null);

    function click(cell: Cell) {
     
        if (selecedCell && selecedCell !== cell && selecedCell.figure?.canMove(cell)) {
            selecedCell.moveFigure(cell)
            setSelectedCell(null)
            // updateBoard()
        } else {
            if( cell.figure) setSelectedCell(cell)
        }
    }

    useEffect(() => {
        highlightCells()
    }, [selecedCell])

    function highlightCells() {
        board.highlightCells(selecedCell)
        updateBoard()
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return (
        <div className='board'>
            {board.cells.map((row, index) => 
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent
                            click={click}
                            cell={cell}
                            selected={cell.x === selecedCell?.x && cell.y === selecedCell?.y}
                            key={cell.id}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    );
}

export default BoardComponent;
