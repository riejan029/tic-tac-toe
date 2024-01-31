export interface BoardProps {
  squares: SquareValue[];
  onClick: (i: number) => void;
}

export type SquareValue = "X" | "O" | null;
