import { ChangeEvent } from "react";

export interface TextFieldProps {
  placeholder: string;
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
