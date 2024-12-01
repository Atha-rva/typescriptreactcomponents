import { makeStyles, makeStaticStyles } from "@fluentui/react-components";
import { constants } from "../../assets/desginPattern/constant/constant";
import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";
import {
  fontFamily,
  fontSize,
  fontWeight,
} from "../../assets/desginPattern/font/FontSize/fontSize";

export const useStyles = makeStyles({
  checkboxContainer: {
    display: "flex",
    gap: "20px",
    marginTop: "10px",
    fontFamily: "sans-serif",
  },
  checkIndicator: {
    border: `1px solid ${colorSchema.grays.secondaryText}`,
    width: "30px",
    height: "30px",
    borderRadius: "8px",
  },
  invisible: {
    display: constants.display.none,
  },
  disabled: {
    opacity: constants.opacity.pointFive,
    WebkitUserSelect: constants.webkitUserSelect.none,
    pointerEvents: constants.pointerEvents.none,
  },
  label: {
    ">label": {
      fontSize: fontSize.Body_12_R,
      fontWeight: fontWeight.fontWeight400,
      fontFamily: fontFamily.fontFamilyLato,
    },
  },
  labelCheckbox: {
    ">label": {
      fontSize: fontSize.Body_14_R,
      fontWeight: fontWeight.fontWeight400,
      fontFamily: fontFamily.fontFamilyLato,
    },
  },
});

export const useStaticStyles = makeStaticStyles({
  ".f35ds98": {
    "--fui-Checkbox__indicator--backgroundColor":
      colorSchema.grays.secondaryText,
  },
  ".fix56y3:hover": {
    "--fui-Checkbox__indicator--backgroundColor": `${colorSchema.grays.secondaryText} !important`,
  },
});
