import type { ReactElement } from "react";
import type { TextFieldProps } from "./types";

const TextField = (props: TextFieldProps): ReactElement => {
  const { placeholder, id, onChange, value } = props;
  return (
    <input
      type="text"
      name={id}
      id={id}
      placeholder={placeholder}
      className="input-text"
      onChange={onChange}
      value={value}
    />
  );
};

export default TextField;
