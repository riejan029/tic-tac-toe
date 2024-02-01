import type { ReactElement } from "react";
import type { ButtonProps } from "./types";

const Button = (props: ButtonProps): ReactElement => {
  const { children, onClick, type, disabled = false } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      id="generic-button"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
