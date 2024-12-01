import { makeStyles } from "@fluentui/react-components";
import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";
import {
  fontFamily,
  fontSize,
  fontWeight,
} from "../../assets/desginPattern/font/FontSize/fontSize";

export const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    display: "flex",
  },

  drawerOpen: {
    left: "0",
  },

  divider: {
    width: "128%",
    marginLeft: "-30px",
    marginTop: "15px",
    marginBottom: "5px",
  },
  drawer: {
    backgroundColor: `${colorSchema.grays.defaultBackgroundOutline}`,
    minHeight: "100vh",
    width: "352px",
  },
  drawerPosition: {
    position: "fixed",
    // top: "73px",
    // left: "90px",
  },
  padding: {
    paddingLeft: "16px",
    paddingRight: "16px",
  },
  headerTitle: {
    ">h2": {
      fontFamily: fontFamily.fontFamilyLato,
      fontSize: fontSize.Body_14_R,
      fontWeight: fontWeight.fontWeight700,
    },
  },
  drawerHeader: {
    ":after": {
      opacity: "0 !important",
      backgroundColor: "transparent !important",
    },
    boxShadow: `-14px 0 12px -16px rgba(0, 0, 0, 0.4) inset`,
  },
  drawerBody: {
    ":last-child": {
      paddingBottom: "120px",
    },
    boxShadow: `-14px 0 12px -16px rgba(0, 0, 0, 0.4) inset`,
  },
});
