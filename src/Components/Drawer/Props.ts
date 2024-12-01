import { DrawerProps } from "@fluentui/react-components";
import { Dispatch, SetStateAction } from "react";

export type drawerProps = Omit<DrawerProps, "modalType"> & {
  size?: "medium" | "large" | "full";
  title?: string;
  modalType?: "non-modal" | "modal" | "alert";
  children?: React.ReactNode;
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
