import type { ReactElement } from "react";
import type { ButtonProps } from "./types";

const Button = (props: ButtonProps): ReactElement => {
  const { children, onClick, type } = props;
  return (
    <button type={type} onClick={onClick} id="generic-button">
      {children}
    </button>
  );
};

export default Button;
