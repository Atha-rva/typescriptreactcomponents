import { makeStyles } from "@fluentui/react-components";
import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";
import { fontFamily } from "../../assets/desginPattern/font/FontSize/fontSize";
import { constants } from "../../assets/desginPattern/constant/constant";
export const useStyles = makeStyles({
  splitButton: {
    backgroundColor: colorSchema.colorSuccess,
    borderRadius: "20px",
    fontFamily: fontFamily.fontFamilyLato,
  },
  radio: {
    color: colorSchema.grays.defaultBackground,
    fontFamily: fontFamily.fontFamilyLato,
  },
  infoButton: {
    width: "16px",
    height: "16px",
    fontFamily: fontFamily.fontFamilyLato,
  },
  radioGroop: {
    display: "flex",
    fontFamily: fontFamily.fontFamilyLato,
    flexDirection: "row",
    gap: "0.625rem",
    minWidth: "145px",
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
