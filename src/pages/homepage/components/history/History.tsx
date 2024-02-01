import type { ReactElement } from "react";
import type { HistoryObject } from "~/api/types";

import { useEffect, useState } from "react";

import Title from "~/components/title/Title";
import List from "../list";

import { getHistory } from "~/api/api";
import Loading from "~/components/loading";

const History = (): ReactElement => {
  const [sessions, setSessions] = useState<HistoryObject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    getHistory().then((res) => {
      setSessions(res.sessions);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="history-wrapper">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Title title="History" />
          <List player1="Player 1" player2="Player 2" status="Winner" header />
          {sessions.map((session) => (
            <List
              key={session.sessionId}
              player1={session?.gameRecords[0]?.winnerDetails?.player1 || ""}
              player2={session?.gameRecords[0]?.winnerDetails?.player2 || ""}
              status={session?.gameRecords[0]?.winnerDetails?.winner || ""}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default History;
