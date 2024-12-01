import {
  AccordionItemProps,
  AccordionPanelProps,
  AccordionProps,
} from "@fluentui/react-components";

interface ListEntry {
  key: string;
  value: string;
}

type HeadingLevelsProps = AccordionPanelProps &
  Omit<AccordionItemProps, "value"> &
  AccordionProps &
  VisibilityProps & {
    title?: string;
    children: React.ReactNode;
    bodyClassName?: string;
    Headertitle?: string;
    onDelete?: () => void;
    list: ListEntry[][];
    index?: number;
    showCount?: string;
    showTitle?: boolean;
    showHeaderText?: boolean;
    removeDeleteBtn?: boolean;
    hideIndex?: boolean;
  };
export type { HeadingLevelsProps };
