import CircularProgress from "@mui/material/CircularProgress";
import type { ReactElement } from "react";

const Loading = (): ReactElement => {
  return (
    <div>
      <CircularProgress color="primary" />
    </div>
  );
};

export default Loading;
