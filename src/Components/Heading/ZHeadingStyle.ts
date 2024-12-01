import { makeStyles } from "@fluentui/react-components";
import { typographyStyles } from "@fluentui/react-components";
import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";
import {
  fontSize,
  fontWeight,
  lineHeight,
  fontFamily,
} from "../../assets/desginPattern/font/FontSize/fontSize";
import { constants } from "../../assets/desginPattern/constant/constant";

export const useStyles = makeStyles({
  title: {
    ...typographyStyles.title1,
    color: colorSchema.grays.primaryText,
    fontSize: fontSize.Header_24_B,
    fontWeight: fontWeight.fontWeight700,
    lineHeight: lineHeight.lineHeight28,
    fontFamily: fontFamily.fontFamilyLato,
  },
  SubTitle: {
    ...typographyStyles.title2,
    color: colorSchema.grays.primaryText,
    fontSize: fontSize.Header_14_SB,
    fontWeight: fontWeight.fontWeight700,
    lineHeight: lineHeight.lineHeight16,
    fontFamily: fontFamily.fontFamilyLato,
  },
  paragraph: {
    color: colorSchema.grays.primaryText,
    fontSize: fontSize.Body_16_R,
    fontWeight: fontWeight.fontWeight400,
    lineHeight: lineHeight.lineHeight19,
    fontFamily: fontFamily.fontFamilyLato,
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
