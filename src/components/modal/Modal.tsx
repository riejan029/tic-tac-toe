import type { ReactElement } from "react";
import type { ModalProps } from "./types";

import { Fragment } from "react";

import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material";

const StyledDialog = styled(Dialog)(() => ({
  [`& .MuiPaper-root`]: {
    backgroundColor: "#3BB4BC",
    borderRadius: "10px",
    width: "55rem",
    height: "30rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Modal = (props: ModalProps): ReactElement => {
  const { onClose, open, children } = props;

  return (
    <Fragment>
      <StyledDialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {children}
      </StyledDialog>
    </Fragment>
  );
};

export default Modal;
