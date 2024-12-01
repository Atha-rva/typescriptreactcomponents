import { makeStyles } from "@fluentui/react-components";
import { constants } from "../../assets/desginPattern/constant/constant";
import {
  fontFamily,
  fontSize,
  fontWeight,
} from "../../assets/desginPattern/font/FontSize/fontSize";
import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";

export const useStyles = makeStyles({
  inputStyle: {
    width: "100%",
    border: "0.063rem solid #616161",
    height: "2.438rem",
    borderRadius: "0.625rem",
    ":hover": {
      border: "0.063rem solid #616161",
    },

    ":after": {
      border: "none",
    },
    ">input": {
      fontFamily: fontFamily.fontFamilyLato,
      fontSize: fontSize.Body_14_R,
      fontWeight: fontWeight.fontWeight400,
    },
  },
  calendar: {
    backgroundColor: "white",
    boxShadow: "0rem 0rem 0.635rem rgba(0, 0, 0, 0.3)",
    borderRadius: "0.635rem",
    marginTop: "0.635rem",
  },
  calendarWrapper: {
    position: "absolute",
    zIndex: 1000,
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
      fontFamily: fontFamily.fontFamilyLato,
      fontSize: fontSize.Body_12_R,
      fontWeight: fontWeight.fontWeight400,
    },
  },
  errorMessage: {
    color: `${colorSchema.errorsAndStatus.error}`,
    display: "flex",
    justifyContent: "end",
    fontFamily: fontFamily.fontFamilyLato,
    fontWeight: fontWeight.fontWeight400,
    fontSize: fontSize.Body_12_R,
  },
});
