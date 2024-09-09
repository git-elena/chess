import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";
 
export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
    available: boolean; // for selected figure
    id: number;

    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.board = board;
        this.available = false;
        this.id = Math.random();
    }

    isEmpty(): boolean {
        return this.figure === null
    }

    isEmptyVertical(target: Cell): boolean {
        // console.log('target.x', target.x)
        // console.log('target.y', target.y)
        console.log('this', this)
        console.log('target', target)
        if (this.x !== target.x)
            return false;

        const min = Math.min(this.y, target.y)
        const max = Math.max(this.y, target.y)

        // console.log('min', min)
        // console.log('max', max)

        for (let y = min +1; y < max; y++) {
            console.log(this.board.getCell(this.x, y))
            if (!this.board.getCell(this.x, y).isEmpty()) {
                
                console.log('Not Empty ^')
                return false
            }
            
            console.log('Empty ^ ')
        }
         
        return true
    }

    isEmptyHorizontal(target: Cell): boolean {
        return true
    }

    isEmptyDiagonal(target: Cell): boolean {
        return true
    }

    moveFigure(target: Cell) {
        if (this.figure && this.figure?.canMove(target)) {
            this.figure.moveFigure(target);
            target.figure = this.figure;
            // target.figure.cell = this;
            this.figure = null;
        }
    }
}