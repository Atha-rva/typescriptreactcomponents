import { makeStyles, shorthands } from "@fluentui/react-components";
import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";
import { fontFamily } from "../../assets/desginPattern/font/FontSize/fontSize";
const useStyles = makeStyles({
  customContainer: {
    boxSizing: "border-box",
    backgroundColor: colorSchema.grays.defaultBackground,
    fontFamily: fontFamily.fontFamilyLato,
    // padding: "24px",
    ...shorthands.borderRadius("8px"),
  },
  customContainerFluid: {
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
    fontFamily: fontFamily.fontFamilyLato,
    backgroundColor: colorSchema.grays.defaultBackground,
    ...shorthands.borderRadius("8px"),
  },
});

export { useStyles };
