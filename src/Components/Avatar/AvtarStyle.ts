import { makeStyles } from "@fluentui/react-components";
import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";
import {
  fontFamily,
  fontSize,
  fontWeight,
} from "../../assets/desginPattern/font/FontSize/fontSize";
import { constants } from "../../assets/desginPattern/constant/constant";
export const useStyles = makeStyles({
  avatarTitle: {
    fontSize: fontSize.Body_14_R,
    color: colorSchema.grays.primaryText,
    fontStyle: "normal",
    fontFamily: fontFamily.fontFamilyLato,
    fontWeight: fontWeight.fontWeight600,
    lineHeight: "normal",
    marginLeft: "1rem",
    marginTop: "0.4rem",
  },
  avatarGroupClass: {
    ">button": {
      width: "1.25rem",
      height: "1.25rem",
      marginTop: "0.413rem",
      fontSize: "0.625rem",
    },
  },
  avatarGroup: {
    ">button": {
      width: "1.25rem",
      height: "1.25rem",
      marginTop: "1.183rem",
      right: "0.493rem",
      fontSize: "0.625rem",
      pointerEvents: "none",
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
