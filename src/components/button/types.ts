import { PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
  type: ButtonType;
}

type ButtonType = "submit" | "button";
