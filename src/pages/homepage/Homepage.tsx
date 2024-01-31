import type { ReactElement } from "react";

import { useEffect } from "react";

import Title from "~/components/title/Title";
import History from "./components/history";
import Start from "./components/start";
import Game from "../game";
import { useSelector } from "react-redux";
import { getSession } from "~/redux/slice/sessionSlice";

const Homepage = (): ReactElement => {
  const startGame = useSelector(getSession).start;
  useEffect(() => {
    console.log(startGame);
  }, [startGame]);

  return (
    <>
      {startGame ? (
        <Game />
      ) : (
        <div className="homepage-wrapper">
          <Title title="Tic Toc Toe" />
          <div className="body-wrapper">
            <History />
            <Start />
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;
