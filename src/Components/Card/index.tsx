import * as React from "react";

import {
  makeStyles,
  Caption1,
  Button,
  shorthands,
  CardProps,
  mergeClasses,
} from "@fluentui/react-components";
import {
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components";

// const resolveAsset = (asset: string) => {
//   const ASSET_URL =
//     "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/";

//   return `${ASSET_URL}${asset}`;
// };

const useStyles = makeStyles({
  card: {
    ...shorthands.margin("auto"),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "320px",
    maxWidth: "100%",
  },
});

const ZCard = () => {
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <CardHeader
        description={<Caption1>5h ago · About us - Overview</Caption1>}
      />

      <CardPreview>
        Welcome to ZCard Container
      </CardPreview>

      <CardFooter>
        <Button>Reply</Button>
        <Button>Share</Button>
      </CardFooter>
    </Card>
  );
};

type ZDefaultCardProps = CardProps & {};

const ZDefaultCard = React.forwardRef<HTMLDivElement, ZDefaultCardProps>(
  ({ children, ...props }, ref) => {
    const styles = useStyles();

    return (
      <Card className={mergeClasses(styles.card, props.className)} ref={ref}>
        {children}
      </Card>
    );
  }
);

export { ZDefaultCard, ZCard };
