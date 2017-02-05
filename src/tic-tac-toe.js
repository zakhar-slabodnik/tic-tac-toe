
class TicTacToe {
  constructor() {
    this.ticTacBoard = [[null, null, null],[null, null, null],[null, null, null]];
    this.currentPlayerSymbol = 'x';
    this.step = 0;
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayerSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.ticTacBoard[rowIndex][columnIndex] == null) {
      this.ticTacBoard[rowIndex][columnIndex] = this.currentPlayerSymbol;

      if (this.currentPlayerSymbol == 'x') {
        this.currentPlayerSymbol = 'o';
      } else {
        this.currentPlayerSymbol = 'x';
      }
      this.step += 1;
    }
  }

  isFinished() {
    return this.noMoreTurns() || this.getWinner() != null;
  }

  getWinner() {
    let winner =
      (this.ticTacBoard[0][0] == this.ticTacBoard[0][1] && this.ticTacBoard[0][1] == this.ticTacBoard[0][2] && this.ticTacBoard[0][2] == this.ticTacBoard[0][0] && this.ticTacBoard[0][0]) ||
      (this.ticTacBoard[1][1] == this.ticTacBoard[1][0] && this.ticTacBoard[1][0] == this.ticTacBoard[1][2] && this.ticTacBoard[1][2] == this.ticTacBoard[1][1] && this.ticTacBoard[1][1]) ||
      (this.ticTacBoard[2][0] == this.ticTacBoard[2][1] && this.ticTacBoard[2][1] == this.ticTacBoard[2][2] && this.ticTacBoard[2][2] == this.ticTacBoard[2][0] && this.ticTacBoard[2][0]) ||

      (this.ticTacBoard[0][0] == this.ticTacBoard[1][0] && this.ticTacBoard[1][0] == this.ticTacBoard[2][0] && this.ticTacBoard[2][0] == this.ticTacBoard[0][0] && this.ticTacBoard[0][0]) ||
      (this.ticTacBoard[1][1] == this.ticTacBoard[0][1] && this.ticTacBoard[0][1] == this.ticTacBoard[2][1] && this.ticTacBoard[2][1] == this.ticTacBoard[1][1] && this.ticTacBoard[1][1]) ||
      (this.ticTacBoard[0][2] == this.ticTacBoard[1][2] && this.ticTacBoard[1][2] == this.ticTacBoard[2][2] && this.ticTacBoard[2][2] == this.ticTacBoard[0][2] && this.ticTacBoard[0][2]) ||

      (this.ticTacBoard[1][1] == this.ticTacBoard[0][2] && this.ticTacBoard[0][2] == this.ticTacBoard[2][0] && this.ticTacBoard[2][0] == this.ticTacBoard[0][2] && this.ticTacBoard[1][1]) ||
      (this.ticTacBoard[0][0] == this.ticTacBoard[1][1] && this.ticTacBoard[1][1] == this.ticTacBoard[2][2] && this.ticTacBoard[2][2] == this.ticTacBoard[0][0] && this.ticTacBoard[0][0])

    if (!winner) {
      return null;
    }
    return winner;
  }

  noMoreTurns() {
    if (this.step == 9) {
      return true;
    } else {
      return false;
    }
  }

  isDraw() {
    if (this.noMoreTurns() && this.getWinner() == null) {
      return true;
    } else {
      return false;
    }
  }

  getFieldValue(rowIndex, colIndex) {
    return this.ticTacBoard[rowIndex][colIndex]
  }
}

module.exports = TicTacToe;
