import { PropsWithChildren } from "react";

export interface ModalProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  //   onOpen: () => void;
}
