import { Figure, FigureNames } from './Figure';
import blackLogo from '../../assets/black-queen.png'
import whiteLogo from '../../assets/white-queen.png'
import { Colors } from '../Colors';
import { Cell } from '../Cell';

export class Queen extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.QUEEN
    }

    canMove(target: Cell): boolean {
        // if(target.x === 3 && target.y === 2)
        // console.log('target: Cell [3,2]', target)

        if (!super.canMove(target)) {
            // console.log('super.canMove F', target.x, target.y)
            
            return false;
        }
        // console.log('target[x, y]', target.x, target.y)
        if (this.cell.isEmptyVertical(target)) {
            // console.log('isEmptyVertical target[x, y]', target.x, target.y)
            return true;
        }
        // console.log('target[x, y]', target.x, target.y)
        return false
    }
}

