import { makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    rowGap: "5px",
  },
  example: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    minHeight: "96px",
    backgroundColor: tokens.colorNeutralBackground1,
  },
  hover: {
    cursor: "pointer",
  },
  dividerAddContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  divider: {
    flexGrow: 1,
    ":after": {
      marginLeft: "0px",
    },
    ":before": {
      marginRight: "0px",
    },
  },
  addIcon: {
    marginLeft: "8px",
    cursor: "pointer",
  },
  innerBtn: {
    fontWeight: "400",
    backgroundColor: "#C7C7C7",
    borderRadius: "14px",
    color: "#FFFFFF",
    ":hover": {
      color: "white",
      backgroundColor: "black",
    },
    ":active": {
      color: "#FFFFFF",
      backgroundColor: "#C7C7C7",
    },
  },
});

export { useStyles };
