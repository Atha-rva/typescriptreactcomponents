import { makeStyles } from "@fluentui/react-components";
import {
  fontFamily,
  fontSize,
  fontWeight,
} from "../../assets/desginPattern/font/FontSize/fontSize";
import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";

export const useStyles = makeStyles({
  dropZone: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: `0.125rem dashed ${colorSchema.grays.TertiaryText}`,
    borderRadius: "0.625rem",
    width: "100%",
    height: "7.875rem",
    cursor: "pointer",
    gap: "0.3125rem",
  },
  dragOver: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  text: {
    fontFamily: fontFamily.fontFamilyLato,
    fontSize: fontSize.Body_12_R,
  },
  textOr: {
    fontFamily: fontFamily.fontFamilyLato,
    fontSize: fontSize.Body_12_R,
    color: `${colorSchema.grays.TertiaryText}`,
  },
  subTitle: {
    fontFamily: fontFamily.fontFamilyLato,
    fontSize: fontSize.Body_12_R,
  },
  selectButton: {
    width: "4.375rem",
    height: "2rem",
    fontFamily: fontFamily.fontFamilyLato,
    backgroundColor: colorSchema.grays.defaultBackground,
    color: colorSchema.grays.primaryText,
    fontSize: fontSize.Body_12_R,
    fontWeight: fontWeight.fontWeight400,
    borderRadius: "0.625rem",
    border: `1px solid ${colorSchema.grays.primaryText}`,
    ":hover": {
      color: "black",
      backgroundColor: "transparent",
      border: `1px solid ${colorSchema.grays.primaryText}`,
    },
  },
  fileFormatText: {
    ">span": {
      fontFamily: fontFamily.fontFamilyLato,
      fontSize: fontSize.Body_10_R,
      color: `${colorSchema.grays.TertiaryText}`,
    },
  },
  uploadedFileContainer: {
    borderRadius: "0.625rem",
    padding: "2px",
    background: `linear-gradient(96deg, ${colorSchema.gradient.teaserModeLeft} 2.01%, ${colorSchema.gradient.teaserModeRight} 173.6%)`,
    height: "7.875rem",
    width: "100%",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    background: "transparent",
    border: `2px solid ${colorSchema.grays.defaultBorder}`,
    borderRadius: "50%",
    color: "black",
    fontSize: "1.125rem",
    cursor: "pointer",
    height: "1.25rem",
    width: "1.25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  fileDetailsContainer: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "0.5rem",
    background: "white",
    height: "100%",
  },
  fileDetails: {
    display: "flex",
    gap: "1rem",
    marginLeft: "1rem",
    marginTop: "1rem",
    marginRight: "1rem",
  },
  fileInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  fileName: {
    fontWeight: fontWeight.fontWeight700,
  },
  fileMeta: {
    display: "flex",
    gap: "1rem",
  },
  fileMetaText: {
    fontFamily: fontFamily.fontFamilyLato,
    fontSize: fontSize.Body_12_R,
    color: `${colorSchema.grays.TertiaryText}`,
  },
  progressContainer: {
    marginLeft: "1rem",
    marginTop: "1rem",
    marginRight: "1rem",
  },
  errorMessage: {
    color: `${colorSchema.errorsAndStatus.error}`,
    display: "flex",
    justifyContent: "end",
    fontFamily: fontFamily.fontFamilyLato,
    fontWeight: fontWeight.fontWeight400,
    fontSize: fontSize.Body_12_R,
  },
  successMessage: {
    display: "flex",
    gap: "0.625rem",
    marginLeft: "1rem",
    marginTop: "0.375rem",
    fontSize: "0.75rem",
  },
});
