type ZNavigateArrowProps = VisibilityProps & {
  /** Spacing around the icon inside the box (e.g., '8px'). */
  iconSpacing?: string;

  /** Thickness of the border around the box (e.g., '2px'). */
  borderSize?: string;

  /** Size of the icon itself (e.g., '24px'). */
  iconSize?: string;

  /** Color of the border around the box (e.g., '#ccc' or 'blue'). */
  borderColor?: string;

  /** Width of the box that contains the icon (e.g., '40px'). */
  boxWidth?: string;

  /** Border radius for rounding the box corners (e.g., '4px'). */
  borderRadius?: string;

  /** Height of the box containing the icon (e.g., '40px'). */
  boxHeight?: string;

  /** Background color of the box containing the icon (e.g., '#f0f0f0'). */
  boxColor?: string;

  /** Color of the icon itself (e.g., '#333' or 'black'). */
  iconColor?: string;

  /** Callback function triggered on a left-arrow click action. */
  onClickLeft?: () => void;

  /** Callback function triggered on a right-arrow click action. */
  onClickRight?: () => void;
};

export type { ZNavigateArrowProps };
