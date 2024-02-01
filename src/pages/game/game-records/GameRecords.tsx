import type { ReactElement } from "react";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getRecordList } from "~/api/api";
import { getSession } from "~/redux/slice/playerSlice";
import { History } from "~/api/types";
import Loading from "~/components/loading";
interface GameRecordsProps {
  triggerRerender: boolean;
}
const GameRecords = (props: GameRecordsProps): ReactElement => {
  const { triggerRerender } = props;
  const session = useSelector(getSession);
  const [history, setHistory] = useState<History[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    getRecordList({ sessionId: session.sessionId }).then((res) => {
      setIsLoading(false);
      setHistory(res.history);
    });
  }, [triggerRerender]);

  return (
    <div className="game-record">
      <div className="header">
        <h2 className="status">Player 1</h2>
        <h2 className="status">Player 2</h2>
      </div>
      <div className="game-list-records-wrapper">
        {isLoading ? (
          <Loading />
        ) : (
          history.map((val) => (
            <div key={val.gameId} className="game-list-records">
              <h2 className="item">Round {val.rounds}</h2>
              <h2 className="item">
                {val.winner === "p1" ? "Winner" : "Loss"}
              </h2>
              <h2 className="item">
                {val.winner === "p2" ? "Winner" : "Loss"}
              </h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GameRecords;
