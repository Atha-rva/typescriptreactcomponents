import { makeStyles, shorthands } from "@fluentui/react-components";
import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
} from "../../assets/desginPattern/font/FontSize/fontSize";
import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";
import { constants } from "../../assets/desginPattern/constant/constant";

export const useStyles = makeStyles({
  label: {
    ">label": {
      fontWeight: fontWeight.fontWeight400,
      fontSize: fontSize.Body_12_R,
      fontFamily: fontFamily.fontFamilyLato,
      lineHeight: lineHeight.lineHeight19,
    },
  },
  listbox: {
    maxHeight: "135px !important",
    border: `1px solid ${colorSchema.types.primary3}`,
  },
  listboxContainer: {
    border: `1px solid ${colorSchema.types.primary3}`,
    borderRadius: "10px",
  },
  dropdown: {
    border: `1px solid ${colorSchema.grays.TertiaryText}`,
    width: "100%",
    minWidth: "150px",
    minHeight: "2.5rem",
    cursor: "pointer",
    fontWeight: fontWeight.fontWeight400,
    fontSize: fontSize.Body_12_R,
    fontFamily: fontFamily.fontFamilyLato,
    borderRadius: "0.625rem",
    ">button": {
      ">div": {
        fontFamily: fontFamily.fontFamilyLato,
        fontWeight: fontWeight.fontWeight400,
        fontSize: fontSize.Body_14_R,
      },
    },
    ":after": {
      display: "none",
    },

    "&:active, &:focus-within": {
      ...shorthands.borderColor(colorSchema.types.primary3),
    },
    "&:hover": {
      ...shorthands.borderColor(colorSchema.grays.TertiaryText),
    },
  },
  checked: {
    backgroundColor: "black",
    ...shorthands.borderColor("black"),
  },

  border: {
    overflowY: "auto",
    overflowX: "hidden",
    fontFamily: fontFamily.fontFamilyLato,
    fontWeight: fontWeight.fontWeight600,
    fontSize: fontSize.Body_12_R,

    "::-webkit-scrollbar": {
      width: "3px",
      height: "4px",
    },
    "::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "::-webkit-scrollbar-thumb": {
      background: "lightGray",
      borderRadius: "10px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#a09f9f",
    },
  },
  sidemargin: {
    marginLeft: "0.555rem",
    backgroundColor: colorSchema.colorBackgroundPrimaryInput,
    width: "97.6%",
  },
  option: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    borderRadius: "4px",
  },
  selectedOption: {
    display: "flex",
    gap: "8px",
    flexWrap: "nowrap",
    width: "100%",
    overflowX: "auto",
    "::-webkit-scrollbar": {
      width: "3px",
      height: "2px",
    },
    "::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "::-webkit-scrollbar-thumb": {
      background: "lightGray",
      borderRadius: "10px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#a09f9f",
    },
  },
  optionLabel: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    backgroundColor: "#616161",
    paddingLeft: "8px",
    paddingTop: "4px",
    paddingBottom: "4px",
    paddingRight: "6px",
    borderRadius: "10px",
    color: "white",
  },
  crossButton: {
    cursor: "pointer",
    backgroundColor: "white",
    borderRadius: "50%",
    color: "#616161",
    width: "12px",
    height: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10.5px",
    fontWeight: "600",
  },
  errorMessage: {
    color: `${colorSchema.errorsAndStatus.error}`,
    display: "flex",
    justifyContent: "end",
    fontFamily: fontFamily.fontFamilyLato,
    fontWeight: fontWeight.fontWeight400,
    fontSize: fontSize.Body_12_R,
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
