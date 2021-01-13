import React, { Component, useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
} from "@material-ui/core";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import { BrowserRouter, Link } from "react-router-dom";

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

const handlePageChange2 = () => {
  window.location.href = "https://github.com/joseg253";
};

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
