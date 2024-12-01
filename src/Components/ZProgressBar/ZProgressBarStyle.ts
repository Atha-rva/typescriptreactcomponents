import { makeStyles } from "@fluentui/react-components";
import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";
export const useStyles = makeStyles({
  completeProgress: {
    height: "0.375rem",
    width: "100%",
    borderRadius: "0.625rem",
    backgroundColor: `${colorSchema.grays.defaultBackgroundOutline}`,
    "&>div": {
      background: `linear-gradient(96deg, ${colorSchema.gradient.teaserModeLeft} 2.01%, ${colorSchema.gradient.teaserModeRight} 173.6%)`,
    },
  },
  progressContainer: {
    position: "relative",
    width: "100%",
  },
  tooltipText: {
    position: "relative",
  },
  tooltip: {
    position: "absolute",
    bottom: "0.9375rem",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: `${colorSchema.grays.primaryText}`,
    color: "#fff",
    padding: "1px 6px",
    borderRadius: "0.625rem",
    fontSize: "0.75rem",
    whiteSpace: "nowrap",
    visibility: "hidden",
    transition: "left 0.3s ease",
    ":after": {
      content: "''",
      position: "absolute",
      bottom: "-0.5rem",
      left: "50%",
      transform: "translateX(-50%)",
      borderLeft: "0.5rem solid transparent",
      borderRight: "0.5rem solid transparent",
      borderTop: `0.5rem solid ${colorSchema.grays.primaryText}`,
    },
  },
});
