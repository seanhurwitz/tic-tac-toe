import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    board: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    xTurn: true,
    turns: 0,
  };
  checkIfWon = () => {
    for (let a = 0; a < 3; a++) {}
  };
  turnHandler = (rowIdx, colIdx) => {
    const board = JSON.parse(JSON.stringify(this.state.board));
    if (!board[rowIdx][colIdx]) {
      board[rowIdx][colIdx] = this.state.xTurn ? "X" : "O";
      this.checkIfWon();
      this.setState((prevState) => ({
        board,
        xTurn: !prevState.xTurn,
        turns: prevState.turns + 1,
      }));
    }
  };
  render() {
    return (
      <div className="App">
        <h1>TIC TAC TOE</h1>
        <div className="Board">
          {this.state.board.map((row, rowIdx) => (
            <div className="Row" key={rowIdx}>
              {row.map((cell, colIdx) => (
                <div
                  key={`${rowIdx + 1},${colIdx + 1}`}
                  className="Cell"
                  style={{
                    backgroundColor: !cell
                      ? "none"
                      : cell === "X"
                      ? "blue"
                      : "orange",
                  }}
                  onClick={() => this.turnHandler(rowIdx, colIdx)}
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
