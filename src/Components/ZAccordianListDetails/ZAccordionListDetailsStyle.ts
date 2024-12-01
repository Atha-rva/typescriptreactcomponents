import {
  makeStaticStyles,
  makeStyles,
} from "@fluentui/react-components";
import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";
import {
  fontFamily,
  fontSize,
  fontWeight,
} from "../../assets/desginPattern/font/FontSize/fontSize";
import { constants } from "../../assets/desginPattern/constant/constant";

export const useStaticStyles = makeStaticStyles({
  ul: {
    margin: "0px",
    padding: "0px",
    fontFamily: fontFamily.fontFamilyLato,
  },
});

export const useStyles = makeStyles({
  body: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F5F5F5",
    borderRadius: "10px",
  },
  deleteIconStyle: {
    marginRight: "10px",
  },
  listOutter: {
    listStyleType: "none",
    marginTop: "8px",
    "> li": {
      display: "flex",
      marginBottom: "10px",
      borderRadius: "0.625rem",
      alignItems: "center",
      fontFamily: fontFamily.fontFamilyLato,
    },
    width: "100%",
    fontFamily: fontFamily.fontFamilyLato,
  },
  listInner: {
    listStyleType: "none",
    width: "100%",
    paddingTop: "0.56rem",
    paddingBottom: "0.56rem",
    fontFamily: fontFamily.fontFamilyLato,
  },
  listKey: {
    color: colorSchema.grays.TertiaryText,
    fontWeight: fontWeight.fontWeight400,
    fontSize: fontSize.Body_10_R,
    fontFamily: fontFamily.fontFamilyLato,
  },
  listValue: {
    color: colorSchema.grays.primaryText,
    fontWeight: fontWeight.fontWeight700,
    fontSize: fontSize.Body_12_R,
    fontFamily: fontFamily.fontFamilyLato,
  },
  button: {
    paddingRight: "1%",
    fontFamily: fontFamily.fontFamilyLato,
  },
  span: {
    paddingLeft: "2%",
    paddingRight: "2%",
    fontWeight: fontWeight.fontWeight600,
    fontFamily: fontFamily.fontFamilyLato,
  },
  rotated: {
    transform: "rotate(180deg)",
    transition: "transform 0.3s ease",
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
