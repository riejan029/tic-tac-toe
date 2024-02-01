import { PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
  type: ButtonType;
  disabled?: boolean;
}

type ButtonType = "submit" | "button";
