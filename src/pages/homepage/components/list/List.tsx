import type { ReactElement } from "react";
import type { ListProps } from "./types";

const List = (props: ListProps): ReactElement => {
  const { player1, player2, status, header = false } = props;
  return (
    <div className={header ? "list-wrapper-header" : "list-wrapper"}>
      <span id="player1">{player1}</span>
      <span id="player2">{player2}</span>
      <span id="status">{status}</span>
    </div>
  );
};

export default List;
