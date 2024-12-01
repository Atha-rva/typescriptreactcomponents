type ZAccordionProps = VisibilityProps & {
  panels: AccordionPanelType[];
  className?: string;
  style?: any;
  accordionItemClassName?: string;
  accordionItemStyle?: any;
  accordionHeaderClassName?: string;
  accordionHeaderStyle?: any;
  accordionPanelClassName?: string;
  accordionPanelStyle?: any;
  hideExpandIconKeys?: number[];
  defaultOpen?: number;
  openAccordion?: number;
};

type AccordionPanelType = {
  label: string;
  component: any;
  completeStatus: string;
  avatar: any;
  onAccordionClick?: (openAccordion: number) => void;
  isActive?: boolean;
  disabled?: boolean;
};

export type { ZAccordionProps, AccordionPanelType };
