import type { ReactElement } from "react";

const GameRecords = (): ReactElement => {
  return (
    <div className="game-record">
      <div className="header">
        <h2 className="status">Player 1</h2>
        <h2 className="status">Player 2</h2>
      </div>
      <div className="game-list-records-wrapper">
        <div className="game-list-records">
          <h2 className="item">Round 1</h2>
          <h2 className="item">Win</h2>
          <h2 className="item">Loss</h2>
        </div>
        <div className="game-list-records">
          <h2 className="item">Round 2</h2>
          <h2 className="item">Draw</h2>
          <h2 className="item">Draw</h2>
        </div>
      </div>
    </div>
  );
};

export default GameRecords;
