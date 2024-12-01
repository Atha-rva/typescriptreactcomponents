import { makeStyles } from "@fluentui/react-components";
import { constants } from "../../assets/desginPattern/constant/constant";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    cursor: "pointer",
    justifyContent: "center",
  },
  icon: {
    fontSize: "20px",
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
