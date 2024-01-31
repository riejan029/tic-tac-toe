import type { ReactElement } from "react";
import type { TitleProps } from "./types";

const Title = (props: TitleProps): ReactElement => {
  const { title } = props;
  return <h1 className="title">{title}</h1>;
};

export default Title;
