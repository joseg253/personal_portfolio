import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
} from "@material-ui/core";
import GitHub from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWdith: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation width="auto " style={{ background: "#222" }}>
      <BottomNavigationAction
        className={classes.root}
        href="https://github.com/joseg253"
        target="_blank"
        style={{ padding: 0 }}
        icon={<GitHub />}
      />
    </BottomNavigation>
  );
};

export default Footer;
