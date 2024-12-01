import { makeStyles, shorthands } from "@fluentui/react-components";
import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";
import { fontFamily } from "../../assets/desginPattern/font/FontSize/fontSize";
import { constants } from "../../assets/desginPattern/constant/constant";

const useStyles = makeStyles({
  icon: {
    marginLeft: "-15px",
  },
  primary: {
    width: "100%",
    height: "40px",
    fontFamily: fontFamily.fontFamilyLato,
    backgroundColor: colorSchema.buttonHoldBackgroundColor,
    color: colorSchema.grays.defaultBackground,
    fontSize: "14px",
    fontWeight: "400",
    borderRadius: "0.625rem",
    ...shorthands.border("none"),
    ":hover": {
      color: colorSchema.grays.defaultBackground,
      background: "linear-gradient(#33CC99,#33C3CC);",
    },
  },

  secondary: {
    minWidth: "100px",
    height: "30px",
    fontFamily: fontFamily.fontFamilyLato,
    color: colorSchema.grays.primaryText,
    fontSize: "12px",
    fontWeight: "400",
    borderRadius: "8px",
    ...shorthands.border("1px", "solid", colorSchema.grays.primaryText),
    ":hover": {
      color: colorSchema.grays.defaultBackground,
      backgroundColor: colorSchema.grays.primaryText,
    },
  },

  borderButton: {
    minWidth: "100px",
    height: "40px",
    fontFamily: fontFamily.fontFamilyLato,
    color: colorSchema.grays.primaryText,
    fontSize: "12px",
    fontWeight: "400",
    borderRadius: "8px",
    ...shorthands.border("1px", "solid", colorSchema.grays.primaryText),
    ":hover": {
      color: colorSchema.grays.defaultBackground,
      backgroundColor: colorSchema.grays.primaryText,
    },
  },

  colorHold: {
    minWidth: "100px",
    height: "30px",
    background: `linear-gradient(96deg, ${colorSchema.gradient.teaserModeLeft} , ${colorSchema.gradient.teaserModeRight} )`,
    color: colorSchema.grays.defaultBackground,
    fontSize: "12px",
    fontFamily: "sans-serif",
    ...shorthands.border("none"),
    borderRadius: "10px",
    ":hover": {
      color: colorSchema.grays.defaultBackground,
      background: `linear-gradient(96deg, ${colorSchema.gradient.teaserModeLeft} , ${colorSchema.gradient.teaserModeRight} )`,
    },
  },
  transparentButton: {
    minWidth: "30px",
    height: "40px",
    backgroundColor: "transparent",
    color: "black",
    fontFamily: fontFamily.fontFamilyLato,
    fontWeight: 400,
    fontSize: "14px",

    "&:hover, &:active": {
      color: "black",
      backgroundColor: "transparent",
    },
  },
  linearColor: {
    width: "100%",
    height: "40px",
    fontFamily: fontFamily.fontFamilyLato,
    backgroundColor: `linear-gradient(${colorSchema.gradient.teaserModeLeft}, ${colorSchema.gradient.fullpraposalGridLight1})`,
    color: colorSchema.grays.defaultBackground,
    fontSize: "14px",
    fontWeight: "400",
    borderRadius: "0.625rem",
    ...shorthands.border("none"),
  },
  borderColor: {
    minWidth: "100px",
    height: "30px",
    fontFamily: fontFamily.fontFamilyLato,
    color: colorSchema.buttonHoldBackgroundColor,
    fontSize: "12px",
    fontWeight: "400",
    borderRadius: "8px",
    ...shorthands.border("1px", "solid", colorSchema.buttonHoldBackgroundColor),
    ":hover": {
      color: colorSchema.buttonHoldBackgroundColor,
      backgroundColor: "none",
      ...shorthands.border(
        "1px",
        "solid",
        colorSchema.buttonHoldBackgroundColor
      ),
    },
  },
  default: {
    width: "160px",
    height: "40px",
    fontFamily: fontFamily.fontFamilyLato,
    backgroundColor: colorSchema.grays.primaryText,
    color: colorSchema.grays.defaultBackground,
    fontSize: "14px",
    fontWeight: "400",
    borderRadius: "0.625rem",
    ...shorthands.border("none"),
    ":hover": {
      color: colorSchema.grays.defaultBackground,
      backgroundColor: colorSchema.grays.primaryText,
    },
  },
  defaultAppearence: {
    width: "160px",
    height: "40px",
    fontFamily: fontFamily.fontFamilyLato,
    backgroundColor: colorSchema.grays.defaultBackground,
    color: colorSchema.grays.primaryText,
    fontSize: "14px",
    fontWeight: "400",
    borderRadius: "0.625rem",
    border: `1px solid ${colorSchema.grays.primaryText}`,
    ":hover": {
      color: "black",
      backgroundColor: "transparent",
      border: `1px solid ${colorSchema.grays.primaryText}`,
    },
  },
  eyeButton: {
    width: "160px",
    height: "30px",
    fontFamily: fontFamily.fontFamilyLato,
    color: colorSchema.grays.primaryText,
    fontSize: "12px",
    fontWeight: "400",
    borderRadius: "8px",
    gap: ".8rem",
    ...shorthands.border("1px", "solid", colorSchema.grays.primaryText),
    ":hover": {
      color: colorSchema.grays.defaultBackground,
      backgroundColor: colorSchema.grays.primaryText,
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

export { useStyles };
