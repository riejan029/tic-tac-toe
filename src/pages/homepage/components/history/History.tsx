import type { ReactElement } from "react";

import Title from "~/components/title/Title";
import List from "../list";

const History = (): ReactElement => {
  return (
    <div className="history-wrapper">
      <Title title="History" />
      <List player1="Player 1" player2="Player 2" status="Status" header />
      <List player1="Juan" player2="Robert" status="Loss" />
      <List player1="Juan" player2="Robert" status="Draw" />
    </div>
  );
};

export default History;
