import { makeStyles } from "@fluentui/react-components";
import { constants } from "../../assets/desginPattern/constant/constant";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    rowGap: "15px",
  },
  control: {
    maxWidth: "300px",
  },
  clearButton: {
    marginBottom: "5px",
  },
  zlabel: {
    fontFamily: "Lato",
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "0.75rem",
  },
  inputStyle: {
    marginTop: "0.30rem",
    // ...shorthands.border("1px", "solid", "#616161"),
    borderRadius: "0.5rem",
    width: "27.6875rem",
    height: "2.5rem",
    fontFamily: "Poppins",
    fontSize: "0.875rem",
    fontWeight: "400",
    ":after": {
      // ...shorthands.border("none"),
    },
  },
  invisible: {
    display: constants.display.none,
  },
  disabled: {
    opacity: constants.opacity.pointFive,
    WebkitUserSelect: constants.webkitUserSelect.none,
    pointerEvents: constants.pointerEvents.none,
  },
});
