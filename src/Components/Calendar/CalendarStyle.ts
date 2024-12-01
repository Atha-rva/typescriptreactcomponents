import { makeStyles, shorthands } from "@fluentui/react-components";
import { constants } from "../../assets/desginPattern/constant/constant";
export const useStyles = makeStyles({
  labelName: {
    fontFamily: "Poppins",
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "0.75rem",
  },

  inputStyle: {
    marginTop: "0.30rem",
    ...shorthands.border("1px", "solid", "#616161"),
    borderRadius: "0.5rem",
    width: "27.6875rem",
    height: "2.5rem",
    fontFamily: "Poppins",
    fontSize: "0.875rem",
    fontWeight: "400",
  },

  iconStyle: {
    position: "relative",
    bottom: "1.75rem",
    left: "25.625rem",
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
