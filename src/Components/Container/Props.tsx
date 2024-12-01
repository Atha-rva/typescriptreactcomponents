type containerProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  VisibilityProps & {
    children?: any;
    className?: any;
  };

export type { containerProps };
